import "../../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="cybersecurity, vapt internship, GRC internship, Red Team internship, Cloud security internship, internship, remote internship"/>
        <meta name="description" content="Virtual Internships and trainings at hakxcore"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Internships at hakxcore</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0E9P8HQE43"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());

          gtag('config', 'G-0E9P8HQE43');
        </script>
      </head>
      <body className="light vsc-intialized">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
