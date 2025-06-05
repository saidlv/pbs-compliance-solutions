"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  // hydrate from localStorage cache for immediate UI sync
  const [user, setUser] = useState(() => {
    try {
      const s = localStorage.getItem('pbsPortalUser');
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  });
  const [loadingUser, setLoadingUser] = useState(true);

  // On mount, attempt to load user if token present
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('pbsPortalToken');
      if (!token) {
        setLoadingUser(false);
        return;
      }
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        let data;
        try { data = await res.json(); } catch { data = null; }
        console.debug('UserContext /api/user/me:', res.status, data);
        if (res.ok && data) {
          const loaded = data.user ?? data;
          setUser(loaded);
          // update cached user
          localStorage.setItem('pbsPortalUser', JSON.stringify(loaded));
        } else {
          // invalid token
          localStorage.removeItem('pbsPortalToken');
          setUser(null);
          localStorage.removeItem('pbsPortalUser');
        }
      } catch (err) {
        console.error('UserContext loadUser error:', err);
        localStorage.removeItem('pbsPortalToken');
        setUser(null);
        localStorage.removeItem('pbsPortalUser');
      } finally {
        setLoadingUser(false);
      }
    }
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
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
