import React from "react";
import { FeatureCard } from "components/FeatureCard";

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Streamlining healthcare access with innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Token-Based Appointments"
            description="Book appointments with our intelligent token system. Get real-time updates on queue status and receive notifications when your turn approaches."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            }
            callToAction="Book Appointment"
            onClick={() => {}}
          />

          <FeatureCard
            title="VIP Emergency Consultations"
            description="Priority booking for urgent cases. Get immediate attention from specialists and have your consultation reports stored securely in your profile."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M8 2h8" />
                <path d="M12 14v7" />
                <path d="M12 5v5" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            }
            callToAction="Emergency Help"
            onClick={() => {}}
          />

          <FeatureCard
            title="Ambulance Booking"
            description="Book private or government ambulances with real-time tracking. Share your blood group for faster emergency response."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M4 15h15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Z" />
                <path d="M4 18h6c2.5 0 3-2 3-2" />
                <path d="M14 18h6c1 0 3-1 3-3V9h-2c0-2-1-2-3-2H5" />
                <circle cx="9" cy="7" r="1" />
                <circle cx="9" cy="15" r="1" />
              </svg>
            }
            callToAction="Book Ambulance"
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
}
