import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "McInnes Custom Caps",
  description: "McInnes Custom Caps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Loading />
        <Toaster
          toastOptions={{
            duration: 3000,
            style: {
              border: "1px solid green",
              padding: "16px",
            },
          }}
        />
      </body>
    </html>
  );
}
