import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignInButton,SignedIn, SignedOut,
  UserButton } from "@clerk/nextjs";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imagixpert",
  description: "Ai-powered-image-application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<ClerkProvider afterSignOutUrl={"/"}>
<html lang="en">
  <body className={cn("font-ibmPlex antialiased", ibmPlex.variable)}>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    {/* <SignedIn>
      <UserButton />
    </SignedIn> */}
    {children}
  </body>
</html>
</ClerkProvider>
  );
}
