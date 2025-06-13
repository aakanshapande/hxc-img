import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets-careers/css/bootstrap.min.css';
import '../../../assets-careers/css/careers.css';
import '../../../assets-website/css/style.css';
import '../../../assets-website/css/fontawesome.css';
import '../../../assets-website/css/toggle.css';
import '../../../app/globals.css';
import Script from 'next/script';

export default function TermsLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Terms and Conditions - Hakxcore</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body>
        <div>
          {children}
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
          <Script src="/assets-website/js/custom.js" strategy="afterInteractive" />
        </div>
      </body>
    </html>
  );
} 