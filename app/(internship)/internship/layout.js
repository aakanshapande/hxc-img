import "../../globals.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      </head>
      <body className="light vsc-intialized">
        {children}
      </body>
    </html>
  );
}
