import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { useAuthStore } from "utils/authStore";
import { ProtectedRoute } from "components/ProtectedRoute";

export default function Dashboard() {
  const { user, profile, logoutUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <ProtectedRoute requireProfile={true}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white text-red-600 font-medium rounded-md border border-red-200 hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </div>

            {/* Welcome Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  {profile?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Welcome, {profile?.displayName || "User"}!</h2>
                  <p className="text-gray-600">What would you like to do today?</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Section */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6">
                <div className="text-blue-600 mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
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
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Appointment</h3>
                <p className="text-gray-600 mb-4">Schedule a doctor's appointment with our token system</p>
                <button
                  onClick={() => {}}
                  className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  Book Now
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
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6">
                <div className="text-blue-600 mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
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
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Help</h3>
                <p className="text-gray-600 mb-4">Request urgent medical assistance with priority service</p>
                <button
                  onClick={() => {}}
                  className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  Request Now
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
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6">
                <div className="text-blue-600 mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
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
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Ambulance</h3>
                <p className="text-gray-600 mb-4">Request private or government ambulance services</p>
                <button
                  onClick={() => {}}
                  className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  Book Now
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
              </div>
            </div>

            {/* User Profile Card */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Full Name</h3>
                  <p className="text-gray-900">{profile?.displayName || "Not provided"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Email Address</h3>
                  <p className="text-gray-900">{profile?.email || user?.email || "Not provided"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Phone Number</h3>
                  <p className="text-gray-900">{profile?.phoneNumber || "Not provided"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Blood Group</h3>
                  <p className="text-gray-900">{profile?.bloodGroup || "Not provided"}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Address</h3>
                  <p className="text-gray-900">{profile?.address || "Not provided"}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Emergency Contact</h3>
                  <p className="text-gray-900">{profile?.emergencyContact || "Not provided"}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => navigate("/profile")} 
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}