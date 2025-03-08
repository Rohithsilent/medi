import React from "react";

export interface Props {
  onGetStarted?: () => void;
}

export function CallToAction({ onGetStarted }: Props) {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to transform your healthcare experience?</h2>
        <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
          Join thousands of satisfied patients who have simplified their healthcare journey with MediQueue.
        </p>
        <div className="mt-8">
          <button
            onClick={onGetStarted}
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
