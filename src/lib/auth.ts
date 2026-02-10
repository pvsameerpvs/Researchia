"use client";

export const isUserLoggedIn = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("isLoggedIn") === "true";
};

export const loginUser = () => {
  localStorage.setItem("isLoggedIn", "true");
};

export const logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
};
