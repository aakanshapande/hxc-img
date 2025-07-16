'use client'
import Navbar from '../../../components-website/Navbar';
import Footer from '../../../components-website/footer';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import I18nProvider from '@/components/I18nProvider';
import axios from "axios";

function ContactPageContent() {  
  const [username, setUsername] = useState("");  
  const [email, setEmail] = useState("");  
  const [message, setMessage] = useState("");  
  const [errMsg, setErrMsg] = useState("");  
  const [successMsg, setSuccessMsg] = useState("");  
  const [theme, setTheme] = useState('light');
  const form = useRef();
  const router = useRouter();  
  const { t, ready } = useTranslation('common'); 

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

  const emailValidation = () => {    
    return String(email)      
      .toLowerCase()      
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);  
  };  
  
  const handleSend = (e) => {    
    e.preventDefault();    
    if (username === "") {      
      setErrMsg("Username is required!");    
    } else if (email === "") {      
      setErrMsg("Please give your Email!");    
    } else if (!emailValidation(email)) {      
      setErrMsg("Give a valid Email!");    
    } else if (message === "") {      
      setErrMsg("Message is required!");    
    } else {      
      sendEmail();    
    }  
  };  
  
  const sendEmail = async () => {   
    const data = { username, email, message };    
    try {      
      const response = await axios.post('/api/emails', data, {        
        headers: {          
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",          
          "Pragma": "no-cache",         
          "Expires": "0"        
        }      
      });            
      console.log('SUCCESS!', response.status, response.statusText);      
      setSuccessMsg(`Thank you ${username}, Your message has been sent successfully!`);      
      setErrMsg("");      
      setUsername("");      
      setEmail("");      
      setMessage("");      
      router.push('/thanks');    
    } catch (error) {      
      console.log('FAILED...', error);      
      setErrMsg('Something went wrong. Please try again later.');    
    }  
  };  

  // Show loading state while i18n is initializing
  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (    
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>      
      <Navbar />            
      <main className={`flex-grow ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>        
        {/* Contact Content */}        
        <section className="py-16 px-4">         
          <div className="max-w-6xl mx-auto">            
            {/* Hero Section*/}            
            <div className={`mb-12 p-8 mt-20 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} border-l-4 border-blue-500`}>              
              <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`}>
                {t('contact_us')}
              </h1>            
            </div>                        
            {/* Contact Information Cards */}            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">              
              <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : ''}`} style={theme !== 'dark' ? { background: 'linear-gradient(to right, rgba(72, 100, 186, 0.95), rgba(143, 184, 222, 0.95))', color: '#fff' } : {}}>
                <div className="flex items-center mb-4">                  
                  <i className="ri-phone-line text-2xl mr-3"></i>                  
                  <h3 className="text-lg font-semibold">{t('phone')}</h3>                
                </div>                
                <p className="mb-2">+91 93113 22022</p>
                <p className="text-sm">{t('mon_fri')}</p>         
              </div>          
              <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : ''}`} style={theme !== 'dark' ? { background: 'linear-gradient(to right, rgba(72, 100, 186, 0.95), rgba(143, 184, 222, 0.95))', color: '#fff' } : {}}>    
                <div className="flex items-center mb-4">              
                  <i className="ri-mail-line text-2xl mr-3"></i>      
                  <h3 className="text-lg font-semibold">{t('email')}</h3>      
                </div>            
                <p className="mb-2">info@hakxcore.com</p>      
                <p className="mb-2">career@hakxcore.com</p>       
              </div>        
              <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : ''}`} style={theme !== 'dark' ? { background: 'linear-gradient(to right, rgba(72, 100, 186, 0.95), rgba(143, 184, 222, 0.95))', color: '#fff' } : {}}>          
                <div className="flex items-center mb-4">     
                  <i className="ri-time-line text-2xl mr-3"></i>   
                  <h3 className="text-lg font-semibold">{t('working_hours')}</h3>    
                </div>           
                <p className="mb-2">{t('mon_fri')}</p>  
                <p className="mb-2">{t('weekend')}</p>   
              </div>         
            </div>      
            {/* Contact Form */}         
            <div className={`p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>          
              <h2 className="text-2xl font-bold mb-8">{t('send_message')}</h2>   
              {errMsg && (     
                <div className={`mb-6 p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'}`}>          
                  {errMsg}          
                </div>     
              )}                    
              {successMsg && (        
                <div className={`mb-6 p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>       
                  {successMsg}       
                </div>       
              )}      
              <form ref={form} onSubmit={handleSend} className="space-y-6">        
                <div>                  
                  <label htmlFor="username" className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>                    
                    {t('your_name')}
                  </label>                  
                  <input                    
                    type="text"                    
                    id="username"                    
                    name="username"                    
                    value={username}                    
                    onChange={(e) => setUsername(e.target.value)}                    
                    className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:border-blue-400 focus:ring-blue-500' : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-400'} focus:outline-none focus:ring-2`}                    
                    placeholder={t('enter_name')}
                    required                  
                  />                
                </div>                
                <div>                  
                  <label htmlFor="email" className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>                    
                    {t('email_address')}
                  </label>                  
                  <input                    
                    type="email"                    
                    id="email"                    
                    name="email"                    
                    value={email}                    
                    onChange={(e) => setEmail(e.target.value)}                    
                    className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:border-blue-400 focus:ring-blue-500' : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-400'} focus:outline-none focus:ring-2`}                    
                    placeholder={t('enter_email')}
                    required                  
                  />                
                </div>                
                <div>                  
                  <label htmlFor="message" className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>                    
                    {t('your_message')}
                  </label>                  
                  <textarea                    
                    id="message"                    
                    name="message"                    
                    rows="5"                    
                    value={message}                    
                    onChange={(e) => setMessage(e.target.value)}                    
                    className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:border-blue-400 focus:ring-blue-500' : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-400'} focus:outline-none focus:ring-2`}                    
                    placeholder={t('how_can_help')}
                    required                  
                  ></textarea>                
                </div>                
                <button                  
                  type="submit"                  
                  className="w-full py-4 px-6 rounded-xl font-semibold text-white"                  
                  style={{ background: 'linear-gradient(to right, rgba(72, 100, 186, 0.95), rgba(143, 184, 222, 0.95))', border: 'none' }}                
                >                  
                  {t('send_message_btn')}
                </button>              
              </form>            
            </div>          
          </div>        
        </section>      
      </main>      
      <Footer />    
    </div>  
  );
}

export default function ContactPage() {
  return (
    <I18nProvider>
      <ContactPageContent />
    </I18nProvider>
  );
}