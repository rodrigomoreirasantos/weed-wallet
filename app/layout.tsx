import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import { Toaster } from "sonner";
import WeedProvider from "./_providers/weed";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <AuthProvider>
          <Header />
          <WeedProvider>{children}</WeedProvider>
          <Toaster richColors />
        </AuthProvider>
      </body>
    </html>
  );
}
