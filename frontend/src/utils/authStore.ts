import { create } from "zustand";
import { persist } from "zustand/middleware";
import { firebaseAuth } from "app";
import { db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  bloodGroup: string;
  address: string;
  emergencyContact: string;
  photoURL?: string;
}

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  
  // Auth actions
  initializeAuth: () => Promise<void>;
  registerUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  logoutUser: () => Promise<void>;
  
  // Profile actions
  createProfile: (profileData: Omit<UserProfile, "uid">) => Promise<void>;
  updateProfile: (profileData: Partial<UserProfile>) => Promise<void>;
  fetchProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(
  persist(
    (set, get) => ({
      user: null,
      profile: null,
      isLoading: true,
      error: null,

      initializeAuth: async () => {
        set({ isLoading: true });
        return new Promise<void>((resolve) => {
          const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
              set({ user });
              try {
                await get().fetchProfile();
              } catch (error) {
                console.error("Error fetching profile:", error);
              }
            } else {
              set({ user: null, profile: null });
            }
            set({ isLoading: false });
            resolve();
            unsubscribe();
          });
        });
      },

      registerUser: async (email, password) => {
        try {
          set({ error: null, isLoading: true });
          const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
          set({ user: result.user });
          return result;
        } catch (error: any) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      loginUser: async (email, password) => {
        try {
          set({ error: null, isLoading: true });
          const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
          set({ user: result.user });
          await get().fetchProfile();
          return result;
        } catch (error: any) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      logoutUser: async () => {
        try {
          set({ error: null, isLoading: true });
          await signOut(firebaseAuth);
          set({ user: null, profile: null });
        } catch (error: any) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      createProfile: async (profileData) => {
        const { user } = get();
        if (!user) throw new Error("User not authenticated");

        try {
          set({ error: null, isLoading: true });
          const userProfile: UserProfile = {
            uid: user.uid,
            ...profileData,
          };

          await setDoc(doc(db, "userProfiles", user.uid), userProfile);
          set({ profile: userProfile });
        } catch (error: any) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      updateProfile: async (profileData) => {
        const { user, profile } = get();
        if (!user || !profile) throw new Error("User not authenticated or profile not found");

        try {
          set({ error: null, isLoading: true });
          const updatedProfile = { ...profile, ...profileData };
          await setDoc(doc(db, "userProfiles", user.uid), updatedProfile, { merge: true });
          set({ profile: updatedProfile });
        } catch (error: any) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      fetchProfile: async () => {
        const { user } = get();
        if (!user) throw new Error("User not authenticated");

        try {
          set({ error: null, isLoading: true });
          const docSnap = await getDoc(doc(db, "userProfiles", user.uid));
          
          if (docSnap.exists()) {
            const profileData = docSnap.data() as UserProfile;
            set({ profile: profileData });
          } else {
            set({ profile: null });
          }
        } catch (error: any) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      }
    }),
    {
      name: "auth-storage",
      // Only store user and profile in localStorage
      partialize: (state) => ({
        user: state.user ? {
          uid: state.user.uid,
          email: state.user.email,
          displayName: state.user.displayName,
          photoURL: state.user.photoURL,
        } : null,
        profile: state.profile
      }),
    }
  )
);