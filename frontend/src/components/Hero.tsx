import React from "react";

export interface Props {
  onGetStarted?: () => void;
}

export function Hero({ onGetStarted }: Props) {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="56409614-db72-4308-8c6f-506304781d61"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" className="text-blue-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#56409614-db72-4308-8c6f-506304781d61)" />
        </svg>
      </div>
      <div className="relative pt-16 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Skip the wait with</span>
                <span className="block text-blue-600">intelligent healthcare</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
                MediQueue streamlines your healthcare experience with token-based appointments, 
                VIP emergency services, and on-demand ambulance booking - putting your health 
                needs first, all in one place.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                  <button
                    onClick={onGetStarted}
                    className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors text-center w-full sm:w-auto"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => {}}
                    className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors text-center w-full sm:w-auto"
                  >
                    Learn More
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-500 sm:mt-4">
                  No waiting rooms. No hassle. Just quality healthcare.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Doctor with digital tablet"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
