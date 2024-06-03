"use client";
import { Inter } from "next/font/google";
import "../../../assets-website/css/thanks.css"


const inter = Inter({ subsets: ["latin"] });

export default function ThanksLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}