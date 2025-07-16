'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets-careers/css/bootstrap.min.css';
import '../../assets-careers/css/careers.css';
import '../../assets-website/css/style.css';
import '../../assets-website/css/fontawesome.css';
import '../../assets-website/css/toggle.css';
import '../../app/globals.css';

import Script from 'next/script';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export default function TermsLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Privacy Policy - Hakxcore</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <div>
            {children}
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
            <Script src="/assets-website/js/custom.js" strategy="afterInteractive" />
          </div>
        </I18nextProvider>
      </body>
    </html>
  );
}
