"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import PageLoader from "@/components/PageLoader";
import { useEffect } from "react";

export default function AuthWrapper({ children }) {
  const { user, loadingUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (loadingUser) return;
    if (!user) {
      // not authenticated
      router.push("/portal/login");
      return;
    }
    if (user) {
      // authenticated but not a member
      //   if(!user?.memberuser){
      //   window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/portal/subscribe`;
      //   return;
      // }
      // else {
      // on login page but already a member
      router.push("/portal/dashboard");
      return;
      //}
    }
  }, [user, loadingUser, router]);

  // show loader while determining auth state
  if (loadingUser) {
    return <PageLoader />;
  }

  return <>{children}</>;
}
