import React from "react";

export function Statistics() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose MediQueue</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of patients and healthcare professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-4xl mb-2">15k+</div>
            <div className="text-gray-700 font-medium">Patients Served</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-4xl mb-2">98%</div>
            <div className="text-gray-700 font-medium">Reduced Wait Time</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-4xl mb-2">10+</div>
            <div className="text-gray-700 font-medium">Partner Hospitals</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-4xl mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Emergency Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
