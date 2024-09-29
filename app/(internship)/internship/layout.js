import "../../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Internships at hakxcore</title>
      </head>
      <body className="light vsc-intialized">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
