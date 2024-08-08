import "../../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      </head>
      <body className="light vsc-intialized">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
