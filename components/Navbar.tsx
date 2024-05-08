// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 py-3"> 
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-12"> 
//           <div className="flex items-center">
//             <Link href="/" className="text-white font-bold text-xl">
//               <Image
//                 src="/images/logo.png"
//                 alt="Logo"
//                 width={60} 
//                 height={60}
//                 className="mr-2"
//               />
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 href="/"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" 
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/services"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" 
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/testimonials"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" 
//               >
//                 Testimonials
//               </Link>
//               <Link
//                 href="/faqs"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" 
//               >
//                 Faqs
//               </Link>
//               <Link
//                 href="/portfolio"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" 
//               >
//                 Portfolio
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" 
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode) {
      setIsDarkMode(storedMode === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('mode', isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <nav className={`bg-${isDarkMode ? 'gray-800' : 'white'} py-3`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="mr-2"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium`}
              >
                Services
              </Link>
              <Link
                href="/testimonials"
                className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium`}
              >
                Testimonials
              </Link>
              <Link
                href="/faqs"
                className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium`}
              >
                Faqs
              </Link>
              <Link
                href="/portfolio"
                className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium`}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium`}
              >
                Contact
              </Link>
            </div>
          </div>
          <button
            className={`ml-4 px-4 py-2 rounded-md ${
              isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;