import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PagesBanner from "../Shared/PagesBanner";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "You can browse our menu, select your favorite dishes, and add them to your cart. Then proceed to checkout and complete your order with your payment information.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and digital wallets like Apple Pay and Google Pay.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Our standard delivery time is 30-45 minutes. For busy periods, it may take up to 60 minutes. You can track your order in real-time through our app.",
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        "You can modify or cancel your order within 5 minutes of placing it. After that, please contact our customer service team immediately.",
    },
    {
      question: "Do you offer vegetarian and vegan options?",
      answer:
        "Yes! We have a wide variety of vegetarian and vegan options clearly marked on our menu. We also accommodate special dietary requirements.",
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer:
        "We want you to be completely satisfied. If you're not happy with your order, please contact us within 24 hours and we'll make it right with a refund or replacement.",
    },
    {
      question: "Do you have a loyalty program?",
      answer:
        "Yes! Join our TasteHub Rewards program to earn points on every order. Points can be redeemed for discounts and free items.",
    },
    {
      question: "Can I schedule an order for later?",
      answer:
        "Absolutely! You can schedule your order up to 7 days in advance. Perfect for planning meals or special occasions.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We're open Monday through Sunday from 10 AM to 11 PM. Our kitchen closes 30 minutes before the restaurant closes.",
    },
    {
      question: "Do you offer catering services?",
      answer:
        "Yes! We provide catering for events of all sizes. Contact us at least 48 hours in advance for large orders or special events.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="containerr pt-12">
      <title>Frequently Asked Questions</title>
      <PagesBanner title="FAQ" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Find answers to common questions about our services, ordering
            process, and policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-orange-500 text-xl flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-orange-500 text-xl flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-orange-50 dark:bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Our customer service
              team is here to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
