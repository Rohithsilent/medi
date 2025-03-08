import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "utils/authStore";

export interface Props {
  transparent?: boolean;
}

export function Header({ transparent = false }: Props) {
  const navigate = useNavigate();
  const { user, profile, logoutUser } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className={`w-full py-4 ${transparent ? "absolute top-0 z-10" : "bg-white shadow-sm"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => navigate("/")}
        >
          <div className="text-blue-600 font-bold text-3xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 mr-2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span>MediQueue</span>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
        >
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
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => navigate("/")}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Home
          </button>
          {user && (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => {}}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Appointments
              </button>
              <button
                onClick={() => {}}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Emergency
              </button>
              <button
                onClick={() => {}}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Ambulance
              </button>
            </>
          )}
        </nav>
        
        {/* Authentication buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/profile")}>
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm overflow-hidden">
                  {profile?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
                </div>
                <span className="text-gray-700 font-medium text-sm hidden lg:block">
                  {profile?.displayName || user?.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white text-red-600 font-medium rounded-md border border-red-200 hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="hidden sm:flex px-4 py-2 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Register
              </button>
            </>
          )}
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-20 border-t border-gray-100">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    navigate("/");
                    setMenuOpen(false);
                  }}
                  className="py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </button>
                {user ? (
                  <>
                    <button
                      onClick={() => {
                        navigate("/dashboard");
                        setMenuOpen(false);
                      }}
                      className="py-2 text-gray-700 hover:text-blue-600 font-medium"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      className="py-2 text-gray-700 hover:text-blue-600 font-medium"
                    >
                      Appointments
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      className="py-2 text-gray-700 hover:text-blue-600 font-medium"
                    >
                      Emergency
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      className="py-2 text-gray-700 hover:text-blue-600 font-medium"
                    >
                      Ambulance
                    </button>
                    <div className="pt-2 border-t border-gray-100">
                      <button
                        onClick={() => {
                          navigate("/profile");
                          setMenuOpen(false);
                        }}
                        className="py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
                      >
                        My Profile
                      </button>
                      <button
                        onClick={() => {
                          handleLogout();
                          setMenuOpen(false);
                        }}
                        className="py-2 text-red-600 hover:text-red-700 font-medium w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setMenuOpen(false);
                      }}
                      className="py-2 text-gray-700 hover:text-blue-600 font-medium"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        navigate("/register");
                        setMenuOpen(false);
                      }}
                      className="py-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Register
                    </button>
                  </>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
