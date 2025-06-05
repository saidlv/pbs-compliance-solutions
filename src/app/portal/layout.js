"use client";
import React from 'react';
import AuthWrapper from '@/components/AuthWrapper';

export default function PortalLayout({ children }) {
  return (
    <AuthWrapper >
      {children}
    </AuthWrapper>
  );
}
