"use client";
import { Inter } from "next/font/google";
import "../../../assets-website/css/thanks.css"
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Intercom from '@intercom/messenger-js-sdk';

Intercom({
  app_id: 'asbm4t30',
});

const inter = Inter({ subsets: ["latin"] });

export default function ThanksLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Hakxcore SSO, Single Sign-On services, Hakxcore Thanks, Contact"/>
        <meta name="description" content="Thanks for contacting hakxcore"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thanks for contacting hakxcore</title>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}