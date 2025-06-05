"use client";

import CustomErrorBoundary from "@/components/ErrorBoundary";
import Footer from "@/components/Footer";
import Header from "@/components/navbar/Header";
import PageLoader from "@/components/PageLoader";
import SplashScreen from "@/components/SplashScreen";
import { motion } from "framer-motion";
import { MenuProvider } from "@/context/MenuContext";
import { conthrax, gnuolane, poppins } from "@/lib/fonts";
import { Suspense, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import { useRouter, usePathname } from 'next/navigation';
import { useUser } from "@/context/UserContext";

// export const metadata = {
//   title: "PBS | Proactive Building Solutions",
//   description: "Proactive Building Solutions",
//   icons: {
//     icon: "/PBS Assets/Brand Language/Steel Mockup.png", // Path to the favicon in the public folder
//     apple: "/PBS Assets/Brand Language/Steel Mockup.png", // Path to the apple icon in the public folder
//     ms: "/PBS Assets/Brand Language/Steel Mockup.png", // Path to the windows icon in the public folder
//   },
// };

// Globally guards dashboard routes by JWT and user context
function AuthGuard({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loadingUser } = useUser();
  const token = typeof window !== 'undefined' ? localStorage.getItem('pbsPortalToken') : null;

  useEffect(() => {
    if (pathname.startsWith('/portal/dashboard')) {
      if (!token && !loadingUser) {
        router.push('/portal/login');
      } else if (token && !loadingUser) {
        if (!user) router.push('/portal/login');
        else if (!user.memberuser) window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/portal/subscribe`;
      }
    }
  }, [pathname, token, loadingUser, user]);

  if (pathname.startsWith('/portal/dashboard') && (loadingUser || (token && !user))) {
    return <PageLoader />;
  }
  return children;
}

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>PBS | Proactive Building Solutions</title>
        <meta name="description" content="Proactive Building Solutions" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body
        className={`${gnuolane.variable} ${conthrax.variable} ${poppins.variable} antialiased overflow-x-hidden bg-[#6C837D]`}
      >
        <UserProvider>
          <AuthGuard>
            <MenuProvider>
              <CustomErrorBoundary>
                <PageLoader />

                {
                /* <div className="bg-[#141414] ">
              <div className="md:w-[90%] mx-auto">
              </div>
              </div> */
                }
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                > */}
                  {!pathname.startsWith("/portal/dashboard") && <Header />}
                  {/* </motion.div> */}
                  <Suspense fallback={<SplashScreen />}>{children}</Suspense>
                  <Toaster position="top-right" />
                  {!pathname.startsWith("/portal/dashboard") && <Footer />}
                </motion.div>
              </CustomErrorBoundary>
            </MenuProvider>
          </AuthGuard>
        </UserProvider>
      </body>
    </html>
  );
}