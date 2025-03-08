import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "utils/authStore";

export interface Props {
  children: React.ReactNode;
  requireProfile?: boolean;
}

export function ProtectedRoute({ children, requireProfile = false }: Props) {
  const { user, profile, isLoading, initializeAuth } = useAuthStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Initialize auth on component mount
    const init = async () => {
      await initializeAuth();
    };
    init();
  }, [initializeAuth]);

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        // Redirect to login if not authenticated
        navigate("/login");
      } else if (requireProfile && !profile) {
        // Redirect to complete profile if profile is required but missing
        navigate("/complete-profile");
      }
    }
  }, [user, profile, isLoading, navigate, requireProfile]);

  // Show loading state while initializing auth
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If not authenticated or profile is required but missing, don't render children
  if (!user || (requireProfile && !profile)) {
    return null;
  }

  return <>{children}</>;
}