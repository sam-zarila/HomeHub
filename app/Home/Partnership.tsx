'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the process of buying a property?",
    answer: "The process typically involves finding a property, securing financing, making an offer, and then closing the deal after a successful inspection and appraisal."
  },
  {
    question: "How do I determine the right price for my home?",
    answer: "You can determine the right price by analyzing the market, looking at comparable sales in your area, and getting a professional appraisal."
  },
  {
    question: "What should I look for in a real estate agent?",
    answer: "Look for experience, local market knowledge, a strong track record, and good communication skills when selecting a real estate agent."
  },
  {
    question: "What is the difference between pre-qualification and pre-approval?",
    answer: "Pre-qualification is an estimate of what you can afford, while pre-approval is a conditional commitment from a lender for a specific loan amount."
  },
  {
    question: "What are closing costs, and who pays them?",
    answer: "Closing costs include fees for appraisal, title insurance, and more. They are usually paid by the buyer, but sometimes the seller may contribute."
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between bg-green-600 text-white font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-100 text-gray-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
