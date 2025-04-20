import { supabase } from "./supabase";

export async function storeExpense(expenseData, userId) {
  const { data, error } = await supabase
    .from("expenses")
    .insert([{ ...expenseData, user_id: userId }])
    .select();

  if (error) {
    console.error("Insert error:", error);
    throw error;
  }

  return data;
}

export async function fetchExpenses(userId) {
  console.log("user id is: ", userId);
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", userId);

  console.log("data is: ", data);

  if (error) {
    console.error("Fetch error:", error);
    throw error;
  }

  return data;
}

export async function updateExpense(id, expenseData, userId) {
  const { data, error } = await supabase
    .from("expenses")
    .update(expenseData)
    .eq("id", id)
    .eq("user_id", userId)
    .select();

  if (error) {
    console.error("Update error:", error);
    throw error;
  }

  return data;
}

export async function deleteExpense(id, userId) {
  const { data, error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", id)
    .eq("user_id", userId)
    .select();

  if (error) {
    console.error("Delete error:", error);
    throw error;
  }

  return data;
}
