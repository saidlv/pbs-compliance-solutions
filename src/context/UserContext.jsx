"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const UserContext = createContext();

export function UserProvider({ children }) {
  // track authenticated user
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // On mount, attempt to load user if token present
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('pbsPortalToken');
      if (!token) {
        setLoadingUser(false);
        return;
      }
      // decode and check expiry
      let exp = 0;
      try {
        const decoded = jwtDecode(token);
        exp = decoded.exp;
      } catch {
        exp = 0;
      }
      // token.exp is in seconds
      if (Date.now() / 1000 > exp) {
        // token expired
        localStorage.removeItem('pbsPortalToken');
        setUser(null);
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
          // set user from API
          setUser(data.user ?? data);
        } else {
          // invalid token
          localStorage.removeItem('pbsPortalToken');
          setUser(null);
        }
      } catch (err) {
        console.error('UserContext loadUser error:', err);
        localStorage.removeItem('pbsPortalToken');
        setUser(null);
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
