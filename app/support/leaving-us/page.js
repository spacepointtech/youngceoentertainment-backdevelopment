'use client';
import '@/app/style.css'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronRight, FaChevronDown, FaSadTear } from 'react-icons/fa';
import Link from 'next/link';

const LeavingUsComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="support-page bg-black text-white font-poppins">
      
      {/* Hero Section */}
      <div className="hero-section relative">
        <div className="container mx-auto text-center pt-24">
          <h1 className="text-4xl font-semibold mb-8 text-left ml-5">How Can we help?</h1>

          {/* Search Bar */}
          <div className="relative search-container mx-auto mb-12">
            <input
              type="text"
              placeholder="Search for articles..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input placeholder-opacity-30 text-white pl-12 py-3 border border-white rounded-lg w-full focus:outline-none"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white search-icon" />
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-4">
        <Link href="/support" className="back-link text-white text-lg opacity-50">
          &lt; Back
        </Link>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pb-16">
        <div className="faq-header flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <FaSadTear className="text-4xl mb-4 opacity-30" />
            <h2 className="text-2xl font-semibold">Thinking of Leaving Us?</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
        <p className="text-sm opacity-75 mb-6">We&apos;ll be sad to see you go...</p>
        <p className="text-sm opacity-50 mb-12">{filteredFaqItems.length} Articles</p>

        <div className="faq-container bg-[#484848] bg-opacity-[24%] border border-[#A6A6A6] rounded-lg p-6">
          <div className="faq-list">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item, index) => (
                <div key={index} className="faq-item flex flex-col py-4 border-b border-gray-700">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <p>{item.question}</p>
                    {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                  </div>
                  {openIndex === index && (
                    <div className="answer-box bg-[#484848] bg-opacity-[50%] border border-[#A6A6A6] rounded-lg p-4 mt-4">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No articles found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: 'What happens if I stop paying my subscription?',
    answer: 'If you stop paying your subscription, your account will be suspended, and you will lose access to premium features. Your releases will remain on streaming platforms, but new releases or updates will not be processed. You may also incur a cancellation fee, depending on your plan.'
  },
  {
    question: 'How do I delete my YCE Music account & cancel my subscription?',
    answer: 'To delete your YCE Music account and cancel your subscription, log in to your account and go to "Account Settings." From there, select the option to cancel your subscription and follow the prompts. If you want to permanently delete your account, contact our support team for assistance.'
  },
  {
    question: 'Can I withdraw royalties without an active subscription?',
    answer: 'Yes, you can still withdraw royalties even if your subscription is inactive. However, you must ensure that your payout details are up-to-date and that there are no pending issues with your account. Inactive subscriptions may affect your ability to access additional features or services.'
  },
];

export default LeavingUsComponent;
