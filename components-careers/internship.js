"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useTranslation } from 'react-i18next';

function getCategoryCounts(jobs) {
  const counts = {};
  jobs.forEach(job => {
    if (job.category) {
      counts[job.category] = (counts[job.category] || 0) + 1;
    }
  });
  return counts;
}

const badgeColor = "#6b8fd6";

const InternshipAndListings = ({ jobs = [] }) => {
   const { t } = useTranslation('careers');
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setShowAll(false);
  }, [jobs.length]);

  const filteredJobs = jobs.filter(job => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      (job.title && job.title.toLowerCase().includes(searchLower)) ||
      (job.category && job.category.toLowerCase().includes(searchLower)) ||
      (Array.isArray(job.tags) && job.tags.some(tag => tag && tag.toLowerCase().includes(searchLower)));
    const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const categoryCounts = getCategoryCounts(jobs);
  const categories = Object.keys(categoryCounts);
  const visibleJobs = showAll ? filteredJobs : filteredJobs.slice(0, 4);
  const showShowMore = filteredJobs.length > 4 && !showAll;

  return (
    <>
      <div className="flex justify-center items-center w-full mt-12">
        <div
          className="w-full max-w-7xl border-2 rounded-2xl px-24 py-6 flex flex-col items-center bg-white relative"
          style={{ borderColor: badgeColor }}
        >
          <div className="w-full flex justify-center mb-10">
            <span className="inline-block" style={{ background: badgeColor, color: 'white', fontSize: '1.875rem', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '1rem' }}>
         
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full mb-8">
            <div className="flex-1 flex flex-col justify-center items-start md:pl-8">
              <h2 className="text-5xl md:text-5xl font-bold mb-4 leading-tight text-black text-left">
               {t('experience_heading')}<br /> You Need
              </h2>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full md:pr-8 mt-8 md:mt-0">
              <Image
                src={require("@/assets-careers/careersPage-assets/intro-img2.png")}
                alt="Internship search illustration"
                width={220}
                height={160}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="mt-2 mb-2 w-full text-center">
            <p className="text-3xl font-bold text-black">
              Choose Your Category In Your Passionate Cybersecurity Subfield
            </p>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search for jobs.."
                className="w-full py-3 pl-6 pr-12 rounded-lg bg-blue-100 text-lg focus:outline-none border border-blue-200 placeholder:text-gray-500"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 text-3xl">
                <FaSearch />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#f7fafc] py-16 mt-16 flex-col items-center">
        <div className="w-full max-w-7xl">
          <div className="text-5xl font-bold text-gray-900 text-center mb-8">
            {filteredJobs.length > 0
              ? `We have ${filteredJobs.length} open position${filteredJobs.length > 1 ? 's' : ''} now!`
              : "No open positions at the moment."}
          </div>
        </div>
        <div className="w-full max-w-7xl flex gap-8">
          <aside className="w-72 flex-shrink-0">
            <div className="bg-white rounded-md shadow-sm p-6">
              <div className="flex items-center mb-8">
                <div className="border-l-4 border-blue-700 h-10 mr-4"></div>
                <h2 className="text-2xl font-bold">All positions <span className="font-normal">({filteredJobs.length})</span></h2>
              </div>
              <ul className="mb-8 space-y-4">
                <li
                  className={`text-lg cursor-pointer flex items-center justify-between px-2 py-1 rounded-md ${selectedCategory === null ? 'bg-blue-100 font-bold text-gray-800' : 'text-gray-800 hover:font-bold hover:bg-blue-50'}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  <span>All positions</span>
                  <span className="text-gray-500">({jobs.length})</span>
                </li>
                {categories.length > 0 ? categories.map((cat) => (
                  <li
                    key={cat}
                    className={`text-lg cursor-pointer flex items-center justify-between px-2 py-1 rounded-md ${selectedCategory === cat ? 'bg-blue-100 font-bold text-gray-800' : 'text-gray-800 hover:font-bold hover:bg-blue-50'}`}
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  >
                    <span>{cat}</span>
                    <span className="text-gray-500">({categoryCounts[cat]})</span>
                  </li>
                )) : <li className="text-gray-500">No categories</li>}
              </ul>
              <div className="text-sm text-gray-500 mb-4">
                We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch.
              </div>
              <button
                className="w-full border border-black rounded-full py-2 px-4 text-black font-medium hover:bg-gray-100 transition flex items-center justify-center"
                onClick={() => router.push("/internship")}
              >
                Share your LinkedIn profile
              </button>
            </div>
          </aside>
          <main className="flex-1 space-y-6">
            {visibleJobs.map((job, idx) => {
              const safeTags = Array.isArray(job.tags) ? job.tags : [];
              return (
                <div key={job.id || idx} className="bg-white rounded-md shadow-sm p-4 flex flex-col gap-2">
                  <div className="text-xs font-semibold text-gray-600 mb-1">{job.category || ""}</div>
                  <div className="text-2xl font-bold mb-2">{job.title || ""}</div>
                  <div className="flex flex-row gap-6 items-start mb-2">
                    <div className="flex flex-col gap-2 min-w-[150px]">
                      <span className="text-white rounded-full px-5 py-2 text-base font-medium text-center" style={{ background: badgeColor }}>
                        {job.mode ? `${job.mode} | ${job.duration}` : job.duration || ""}
                      </span>
                      <span className="text-white rounded-full px-5 py-2 text-base font-medium text-center" style={{ background: badgeColor }}>
                        Stipend {(!job.stipend || job.stipend === "Free") ? "Free" : `Rs. ${job.stipend}`}
                      </span>
                    </div>
                    <div className="flex flex-row flex-wrap gap-3 max-w-[480px]">
                      {safeTags.length > 0
                        ? safeTags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-gray-400 rounded-full px-4 py-1 text-base text-black bg-white whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))
                        : <span className="text-gray-400 italic">No tags</span>}
                    </div>
                    <button
                      className="bg-black text-white rounded-full px-8 py-3 flex items-center gap-2 text-lg font-medium hover:bg-gray-800 transition ml-auto"
                      onClick={() => router.push("/internship")}
                    >
                      Apply
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
            {showShowMore && (
              <div className="flex justify-center mt-8">
                <button className="border border-black bg-white rounded-full px-7 py-2 font-medium text-lg hover:bg-gray-100 transition" onClick={() => setShowAll(true)}>
                  Show more . . .
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default InternshipAndListings;
