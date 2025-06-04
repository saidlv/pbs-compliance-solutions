"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // On mount, attempt to load user if token present
  useEffect(() => {
    const token = localStorage.getItem("pbsPortalToken");
    if (token && !user) {
      // Fetch current user data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => setUser(data.user || null))
        .catch(() => setUser(null));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
