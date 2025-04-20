import { supabase } from "./supabase";

export async function signUp({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Sign up error:", error);
    throw error;
  }

  const session = data.session;
  const userId = session?.user.id;
  const token = session.access_token;

  return { token, userId };
}

export async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Sign in error:", error);
    throw error;
  }

  const userId = data?.user.id;
  const token = data?.session.access_token;

  return { token, userId };
}
