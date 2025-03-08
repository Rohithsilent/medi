import React, { useEffect } from "react";
import { useAuthStore } from "utils/authStore";

export interface Props {
  children: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
  const { initializeAuth } = useAuthStore();
  
  useEffect(() => {
    // Initialize authentication on app load
    initializeAuth();
  }, [initializeAuth]);

  return <>{children}</>;
}