"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import AuthWrapper from '@/components/AuthWrapper';

export default function PortalLayout({ children }) {
  const pathname = usePathname();
  // Only protect routes under /portal/* except login
  const requireMember = pathname !== '/portal/login';

  return (
    <AuthWrapper requireMember={requireMember}>
      {children}
    </AuthWrapper>
  );
}
