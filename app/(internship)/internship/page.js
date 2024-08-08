"use client";
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';

export default function Home({searchParams}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    highesteducation: '',
    collegename: '',
    linkedin: '',
    resume: '',
    domain: searchParams.domain,
  });

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      setErrMsg("Name is required!");
    } else if (!formData.email) {
      setErrMsg("Email is required!");
    } else if (!formData.phone) {
      setErrMsg("Phone is required!");
    } else if (!formData.highesteducation) {
      setErrMsg("Highest Education is required!");
    } else if (!formData.collegename) {
      setErrMsg("College Name is required NA if not!");
    } else if (!formData.resume) {
      setErrMsg("Resume/Portfolio link is required!");
    }
     else {
      try {
        await axios.post('/api/internship', formData);
        setSuccessMsg('Application submitted successfully!');
        setErrMsg("");
        setFormData({
          name: '',
          email: '',
          phone: '',
          highesteducation: '',
          collegename: '',
          linkedin: '',
          resume: '',
        });
      } catch (error) {
        console.error('Error submitting the application:', error);
        setErrMsg('There was an error submitting the application.');
      }
    }
    router.push('/');
  };



  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg w-full">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Internship Application Form</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-800 font-semibold mb-2 text-center" htmlFor="name">
              Full Name
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center"
              id="name"
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2 text-center" htmlFor="email">
              Email Address
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center"
              id="email"
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2 text-center" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2 text-center" htmlFor="position">
              Highest Education
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center"
              id="highesteducation"
              type="text"
              placeholder="Enter your highest education"
              name="highesteducation"
              value={formData.highesteducation}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2 text-center" htmlFor="position">
              College Name
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center"
              id="collegename"
              type="text"
              placeholder="Enter your college name NA if not"
              name="collegename"
              value={formData.collegename}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2 text-center" htmlFor="position">
              linkedin
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center"
              id="linkedin"
              type="text"
              placeholder="Enter your linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2 text-center" htmlFor="position">
              Resume/Portfolio Link
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center"
              id="resume"
              type="text"
              placeholder="Enter the link to your resume or portfolio"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div>
            <label className="block text-gray-800 font-semibold mb-2 text-center" htmlFor="resume">
              Resume/Portfolio Link
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center"
              id="resume"
              type=""
            />
          </div> */}
          {errMsg && <p className="mb-6 text-red-500 text-center">{errMsg}</p>}
          {successMsg && <p className="mb-6 text-green-500 text-center">{successMsg}</p>}
          <div className="flex items-center justify-center">
            <button
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105"
              type="submit"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
