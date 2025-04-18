import { supabase } from "./supabase";

export async function storeExpense(expenseData) {
  const { data, error } = await supabase
    .from("expenses")
    .insert([expenseData])
    .select();

  if (error) {
    console.error("Insert error:", error);
    throw error;
  }

  return data;
}

export async function fetchExpenses() {
  const { data, error } = await supabase.from("expenses").select("*");

  if (error) {
    console.error("Fetch error:", error);
    throw error;
  }

  return data;
}

export async function updateExpense(id, expenseData) {
  const { data, error } = await supabase
    .from("expenses")
    .update(expenseData)
    .eq("id", id)
    .select();

  if (error) {
    console.error("Update error:", error);
    throw error;
  }

  return data;
}

export async function deleteExpense(id) {
  const { data, error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error("Delete error:", error);
    throw error;
  }

  return data;
}
