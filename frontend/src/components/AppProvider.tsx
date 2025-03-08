import { ReactNode, useEffect } from "react";
import { useAuthStore } from "utils/authStore";

export interface Props {
  children: ReactNode;
}

export function AppProvider({ children }: Props) {
  const { initializeAuth } = useAuthStore();

  // Initialize auth when the app loads
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return <>{children}</>;
}
