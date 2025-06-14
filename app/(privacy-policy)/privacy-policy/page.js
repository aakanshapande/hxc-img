'use client'
import Navbar from '../../../components-careers/Navbar';
import Footer from '../../../components-website/footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(document.documentElement.getAttribute('data-theme'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar />
      <main className={`flex-grow w-full px-4 py-8 mt-20 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className={`mb-12 p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} border-l-4 border-blue-500`}>
            <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`}>Privacy Policy</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className={`mb-12 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <p className={`mb-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Hakxcore Nextcyber Techsolutions Private Limited</span> we are committed to protecting the privacy of our users. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information when you use our website, <span className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}><Link href='/'>hakxcore.io</Link></span>, and our services, including cybersecurity solutions, identity access management, single sign-on solutions, and DevSecOps. By using our services, you agree to the terms of this Privacy Policy.
              </p>
            </section>

            {/* Main Content Sections */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                1. Information We Collect
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                We may collect the following types of information from users:
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                <span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Personal Information:</span> This includes information you voluntarily provide, such as your name, email address, contact information, and company details, when you register, contact us, or use or acquire our services.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                <span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Technical Data:</span> We collect technical data related to your use of our website, including IP address, browser type, device type, operating system, and information about your visit (such as pages visited and the time spent on each page).
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                <span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Usage Data:</span> We gather usage data on how our services are accessed and used. This may include interactions with our services, activity logs, and other diagnostic information.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                <span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Cookies and Tracking Technologies:</span> Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, and customize services. You may adjust your browser settings to refuse cookies, though some features of our website may not function properly.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                <span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>SSO Authentication Data:</span> For clients we are providing our Single Sign-On (SSO) services, we may collect information needed to authenticate and testing users securely across multiple infrastructure applications.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                2. How We Use Your Information
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We use the information collected for the following purposes:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Service Provision:</span> To provide, operate, and maintain our services, including cybersecurity, SSO, IAM, and DevSecOps solutions.</li>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Communication:</span> To respond to your inquiries, send you updates, notify you of changes to our services, and deliver customer support.</li>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Improvement of Services:</span> To analyze usage trends and improve our website, tools, and cybersecurity services.</li>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Security and Fraud Prevention:</span> To monitor, prevent, and respond to fraudulent or unauthorized activity, ensuring the security of our services and client data.</li>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Legal Compliance:</span> To comply with legal obligations, resolve disputes, and enforce agreements.</li>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Refund Processing:</span> To process and manage refund requests, including retaining transaction data as needed for verification and record-keeping.</li>
              </ul>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                3. Sharing of Information
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We may share your personal information in the following instances:
              </p>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>With Service Providers:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>We may share information with third-party service providers that perform tasks on our behalf, such as payment processing, analytics, or IT support. These providers are contractually obligated to protect your information.</p>
              </div>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>For Legal Reasons:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>We may disclose information if required to do so by law or in response to valid legal requests, such as court orders or government investigations.</p>
              </div>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Business Transfers:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of the transaction, and we will notify you of any such transfer.</p>
              </div>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                4. Security of Your Information
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We take data security seriously and implement various technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our measures include encryption, secure access protocols, and regular security audits to safeguard your information.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                While we strive to protect your data, no online transmission or storage of information is completely secure. Therefore, we cannot guarantee absolute security, and you are advised to take reasonable steps to protect your information.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                5. Your Privacy Rights
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Depending on your location and applicable laws, you may have the following rights regarding your personal information:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Access:</span> You may request a copy of your personal data that we hold.</li>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Correction:</span> You can request that we correct any inaccurate or incomplete information.</li>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Deletion:</span> You may request that we delete your personal information, subject to legal obligations.</li>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Objection:</span> You have the right to object to processing your data in certain situations.</li>
                <li className="mb-2"><span className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Data Portability:</span> You may have the right to receive your personal information in a structured, commonly used, and machine-readable format.</li>
              </ul>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                To exercise these rights, please contact us at <Link href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzghwqXpVJjBBdqzTBtSJPCVcFvXkXCHLKSlRjXbfMLNxWKtpPRLGmsdnRfHGxfZLzq" className="text-blue-500 hover:underline">support@hakxcore.io</Link>. We will respond to your request in accordance with applicable laws.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                6. Data Retention
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When information is no longer needed, we will delete or anonymize it in a secure manner.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                7. Children's Privacy
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Our services are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe that a minor has provided us with personal information, please contact us so we can take steps to delete that information.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                8. International Data Transfers
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Hakxcore operates primarily in India, but your information may be transferred to, stored in, or processed in other countries where our service providers operate. By using our services, you consent to such transfers, which are governed by appropriate safeguards to protect your information.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                9. Changes to This Privacy Policy
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or other factors. We encourage you to review this page regularly for the latest information on our privacy practices. Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                10. Contact Us
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className={`mt-4 p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <p className={`mb-1 font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Hakxcore Nextcyber Techsolutions Private Limited</p>
                <p className={`mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}><span className="font-bold">Email:</span> help@hakxcore.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}