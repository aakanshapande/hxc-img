import "../../globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      </head>
      <body className="light vsc-intialized">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
