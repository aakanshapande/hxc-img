"use client";
import "../../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Navbar from "@/components-careers/Navbar";
import "../../../assets-careers/css/careers.css";
import "../../../assets-careers/css/careers-toggle-theme.css";
import IntroSection from "@/components-careers/intro";
import FooterSection from "@/components-website/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Intercom from '@intercom/messenger-js-sdk';
import useJQuery from "./useJQuery";
import I18nProvider from "@/components/I18nProvider";
Intercom({
  app_id: 'asbm4t30',
});

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="vapt internship, GRC internship, Red Team internship, Cloud security internship, internship, remote internship, IAM security internship, cybersecurity internships, Hakxcore careers, Hakxcore internships, Hakxcore SSO, Security Assertion Markup Language, Single Sign-On"/>
        <meta name="description" content="Careers and internships at Hakxcore"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hakxcore Careers</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <noscript>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"/>
        </noscript>
      </head>
      <body className="vsc-intialized" style={{ background: '#fff' }}>
        <I18nProvider>
          <Navbar />
          <IntroSection />
          <div className="bg-white">
            {children}
            <FooterSection />
          </div>
        </I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
