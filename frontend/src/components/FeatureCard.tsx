import React from "react";

export interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  callToAction?: string;
  onClick?: () => void;
}

export function FeatureCard({ title, description, icon, callToAction, onClick }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {callToAction && (
        <button
          onClick={onClick}
          className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
        >
          {callToAction}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 ml-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
