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
            <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`}>Terms and Conditions</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className={`mb-12 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <p className={`mb-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Welcome to <span className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Hakxcore Nextcyber Techsolutions Private Limited</span> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing and using our website, <span className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}><Link href='/'>hakxcore.io</Link></span>, and our services, you agree to comply with and be bound by the following Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our website or services.
              </p>
              <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-blue-50 border-blue-200'} border-l-4`}>
                <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  We reserve the right to modify these Terms of Use at any time, and without proper notice, by posting amended Terms of Use on this Website. Your use of this Website indicates your acceptance of the amended Terms of Use. Therefore, for your own interest, you are advised to go through the Terms of Use periodically.
                </p>
              </div>
            </section>

            {/* Main Content Sections */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                1. Acceptance of Terms
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                By accessing or using our services, you agree to be bound by these Terms, along with any applicable policies, including our <span className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}><Link href="/privacy-policy">Privacy Policy</Link></span>. These Terms apply to all users, including visitors, clients, and registered users.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                2. Services Overview
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Hakxcore provides a range of cybersecurity services, including:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Single Sign-On (SSO) Solutions</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Identity Access Management (IAM)</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Cybersecurity Services</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>DevSecOps Integrations</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Open-Source CRM Solutions</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Custom Tools and Utilities</li>
              </ul>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                These services are intended to enhance security, streamline access management, and provide tailored cybersecurity solutions to businesses around the globe.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                3. User Responsibilities
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                As a user of our services, you agree to:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="mb-2">Use our services in compliance with all applicable laws and regulations.</li>
                <li className="mb-2">Provide accurate and complete information when registering or contracting our services.</li>
                <li className="mb-2">Do not use our services for any illegal or unauthorized purpose, including activities that violate intellectual property rights or compromise the security of our systems or other users.</li>
              </ul>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                4. Account Registration and Security
              </h2>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Registration:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Some services may require you to register an account. You agree to provide accurate and up-to-date information during registration and to keep your account information secure.</p>
              </div>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Account Security:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>You are responsible for maintaining the confidentiality of your account credentials and for any activities or actions under your account. Notify us immediately if you suspect any unauthorized use.</p>
              </div>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                5. Fees and Payment Terms
              </h2>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Service Fees:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Fees for our services will be specified in the applicable service agreement or invoice.</p>
              </div>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Payment Terms:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Payment is due as outlined in your contract, and failure to pay on time may result in suspension or termination of services or if the delivery of the goods and services is over and fees are not paid on or before the specified date in the contract, you may incur the additional penalty of 10% after each month.</p>
              </div>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Refund Policy:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>If you are not satisfied with our services, you may be eligible for a refund within the terms outlined in our Refund Policy. Refund eligibility is subject to specific conditions and must be requested within a specified period after service delivery.</p>
              </div>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                6. Intellectual Property Rights
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                All intellectual property, including content, logos, trademarks, and tools developed by Hakxcore, is owned by us or our licensors. Users are granted a limited, non-exclusive, non-transferable license to use our services for their intended purposes. You may not reproduce, distribute, or create derivative works from any of our intellectual property without our express written consent.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                HAKXCORE makes no warranty that:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="mb-2">This Website or its contents or quality will meet user&apos;s/member&apos;s requirements</li>
                <li className="mb-2">The access to this Website will be uninterrupted, timely, secure or effort-free</li>
                <li className="mb-2">The results that may be obtained from the use of this online forum will be accurate or reliable</li>
                <li className="mb-2">Any material downloaded or otherwise obtained through the use of this online forum is done at your own discretion and risk that you will be solely responsible for any damage to your computer system or loss of data that results from the download of any such material</li>
              </ul>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Any use in any manner of manual or automated software, devices, techniques or other processes/procedures to &quot;crawl&quot; or &quot;spider&quot; any web pages contained in this Website is strictly prohibited. You understand and agree not to supervise, monitor or copy or allow other to supervise, monitor or copy web pages or the content of this Website. You understand and agree not to frame or edit or otherwise replicate the appearance or features or functions of this Website. You understand and agree not to take any action or allow any one to do so that hinders or obstructs or interferes with the working of or places an inappropriate load on our infrastructure to host this Website.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                7. Data Protection and Privacy
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our <span className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}><Link href='/privacy-policy'>Privacy Policy</Link></span>. By using our services, you consent to the collection and use of your information in accordance with this policy.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                HAKXCORE reserves the right to screen, filter and/or monitor information provided by you and to edit, refuse to distribute or remove the same. Since we do not have the ability to, control or actively monitor content we don&apos;t guarantee its accuracy, integrity or quality. Because community standards vary and individuals sometimes choose not to comply with our policies and practices in the process of using our Website, you may be exposed to content that you find offensive or objectionable. You can contact <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXlnBvTWNGgtTpfzNDPRMSBHwWmVPflcwRRXpjBzwrhFxLMWgLZwhCZZRjWGqxggdRzLMWgLZwhCZZRjWGqxggdRzL" className="text-blue-500 hover:underline">tech@hakxcore.io</Link> to let us know of content that you find objectionable. We may investigate the complaints violations of our policies that come to our attention and may take any action that we believe is in compliance with prevalent law, appropriate, including without limitation to issuing warnings, removing the content or terminating accounts and/or memberships. However, because situations and interpretations vary, we also reserve the right not to take action. Under no circumstances will we be liable in any way for any content, including but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of, access to, or denial of access to any content on the Website.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Any information submitted by you must be personal and relate specifically to you. You hereby warrant that the information, which you submit and/or distribute, will not infringe the intellectual property, privacy or any other rights of any third party, and will not contain anything which is libelous, defamatory, obscene, seditious, indecent, harassing or threatening. If relevant, HAKXCORE reserves the right to screen, filter and/or monitor information provided by you and to edit, refuse to distribute or remove the same.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                8. Third-Party Services
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Our services may contain links to third-party websites or services, such as <span className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Okta, Auth0, AWS, Azure, GCP,</span> or any other identity/service providers for SSO integrations. These third-party services are not controlled by us, and we are not responsible for their content, privacy policies, or practices. You acknowledge and agree that Hakxcore is not liable for any loss or damage incurred as a result of using any third-party services.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                9. Service Modifications and Availability
              </h2>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Modifications:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>We reserve the right to modify or discontinue any of our services at any time without prior notice. We are not liable for any modification, suspension, or discontinuation of our services.</p>
              </div>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Service Availability:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>We strive to ensure that our services are available 24/7 but do not guarantee uninterrupted access. Scheduled maintenance and other factors may occasionally limit availability.</p>
              </div>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                10. Limitation of Liability
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                To the fullest extent permitted by law, Hakxcore shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, or any loss of data, use goodwill, or other intangible losses resulting from:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="mb-2">Your use or inability to use our services</li>
                <li className="mb-2">Any unauthorized access, use, or alteration of your transmissions or content</li>
                <li className="mb-2">Any actions or conduct of third parties on the service</li>
              </ul>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Our liability for direct damages shall be limited to the amount you paid for the services, if any, during the six (6) months preceding the event giving rise to the claim.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                11. Indemnification
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                You agree to indemnify, defend, and hold harmless Hakxcore, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses, including reasonable attorneys&apos; fees, arising out of or in connection with:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="mb-2">Your use of the services</li>
                <li className="mb-2">Your violation of these Terms or any applicable laws or regulations</li>
                <li className="mb-2">Any content or data you submit through our services</li>
              </ul>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                By accepting these terms of use you also agree to fully indemnify HAXCORE and its parent, subsidiaries, affiliates, directors, agents, contractors and employees from any claims, civil or criminal, arising against HAKXCORE, from any posting attributed to your Subscriber identity and arising out of your breach of the Terms of Use and policies or documents they incorporates by reference, or your violation of any law, rules or regulation. You also agree that HAKXCORE is not responsible for any objectionable posting as more fully set out in these Terms of Use.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                HAKXCORE cannot accept responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft, destruction, alteration of, or unauthorized access to entries, or entries lost or delayed whether or not arising during operation or transmission as a result of server functions, virus, worms or other causes outside its control.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                12. Termination
              </h2>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Termination by You:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>You may terminate your account and cease using our services at any time.</p>
              </div>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Termination by Us:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>We reserve the right to suspend or terminate your access to our services for any reason, including a breach of these Terms or any unlawful conduct.</p>
              </div>
              <div className="mb-3">
                <p className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Effect of Termination:</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Upon termination, your right to use the services will cease, and we may delete any data associated with your account, except as required by law.</p>
              </div>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                You understand and agree that HAKXCORE reserves all rights to immediately terminate/remove your membership and access to this Website without prior notice and showing any reason, if it suspects breaches or violations of these Terms of Use or other incorporated agreements/guidelines or requests by law enforcement or other government agencies or unexpected technical issues or problems or any other reason that HAKXCORE reasonably believes good for such termination/removal. You further understand and agree that all terminations shall be made in HAKXCORE&apos;s sole discretion and that HAKXCORE shall not be liable to you nor any third party for any termination of your account or access to this Website.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We may conduct surveys, polls, contests on this Website from time to time. The feedback, opinion / Responses from Members will be kept confidential.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                13. Governing Law and Dispute Resolution
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                These Terms are governed by the laws of the Government of, India, without regard to its conflict of laws principles. Any disputes arising under these Terms shall be resolved through mediation in India before seeking other legal remedies.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                14. Changes to Terms and Conditions
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We may update these Terms periodically. When we do, we will revise the &quot;Effective Date&quot; at the top of this page. Your continued use of our services after any changes to these Terms constitutes your acceptance of the updated Terms.
              </p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                15. Contact Us
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className={`mt-4 p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <p className={`mb-1 font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Hakxcore Nextcyber Techsolutions Private Limited</p>
                <p className={`mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}><span className="font-bold">Email:</span> help@hakxcore.io</p>
              </div>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                You accept that any claims arising against HAKXCORE shall be subject to the exclusive jurisdiction of the High Court at New Delhi and the laws of India shall apply therein.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Users/members are requested to refer to Disclaimer displayed separately on the relevant page(s) of this Website. Your usage of this Website shall be construed and deemed as an acceptance of these Terms of Use and Disclaimer displayed on relevant pages and amended from time to time. It is also understood that your acceptance of the Disclaimer will amount to a waiver by you in respect of any claims that you may have against HAKXCORE arising from the content posted herein, your usage of this Website or interaction with any other User/Member, back end team member, room editor, and mentor associated with this Website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
