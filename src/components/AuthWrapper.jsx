"use client";
import {useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import PageLoader from '@/components/PageLoader';
import { useEffect } from 'react';

export default function AuthWrapper({ children}) {
  const { user, loadingUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (loadingUser) return;
    if (!user) {
      // not authenticated
      router.push('/portal/login');
      return;
    }
    if (!user?.memberuser) {
      // authenticated but not a member
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/portal/subscribe`;
      return;
    }
    if (user?.memberuser) {
      // on login page but already a member
      router.push('/portal/dashboard');
      return;
    }
  }, [user, loadingUser, router]);

  // show loader while determining auth state
  if (loadingUser) {
    return <PageLoader />;
  }
  // if requireMember but authenticated but not member, still show loader until redirect
  if (user && !user.memberuser) {
    return <PageLoader />;
  }
  // if !requireMember and user (member or not), show loader until redirect
  if (user) {
    return <PageLoader />;
  }

  return <>{children}</>;
}
