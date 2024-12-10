import { Navigate, redirect } from "react-router-dom";

const isAuthenticated = () => {
  const session = localStorage.getItem("session");

  if (session) throw redirect("/");
  return null;
};

const handleVerificationProtected = () => {
  const session = localStorage.getItem("session");

  if (!session) throw redirect("/signin");
  return null;
};

const signIn = async (email, password, supabase) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

const signUp = async (email, password, supabase) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

const signOut = async (supabase, navigate) => {
  localStorage.removeItem("session");
  localStorage.removeItem("user");

  supabase.auth.signOut();

  return navigate("/signin");
};

export {
  isAuthenticated,
  handleVerificationProtected,
  signIn,
  signUp,
  signOut,
};