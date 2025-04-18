import { supabase } from "./supabase";

export async function storeExpense(expenseData) {
  const { data, error } = await supabase.from("expenses").insert([expenseData]);

  if (error) {
    console.error("Insert error:", error);
    throw error;
  }

  return data;
}
