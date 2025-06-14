import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoading: false,

  // Add hydration function to initialize state
  hydrate: async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      const storedToken = await AsyncStorage.getItem("token");
      
      if (storedUser && storedToken) {
        set({
          user: JSON.parse(storedUser),
          token: storedToken,
        });
      }
    } catch (error) {
      console.error("Error hydrating auth state:", error);
    }
  },

  register: async (data) => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        "http://192.168.100.21:3000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        await AsyncStorage.setItem("user", JSON.stringify(result.user));
        await AsyncStorage.setItem("token", result.token);
      }

      if (response.ok) {
        set({ user: result.user, token: result.token, isLoading: false });
        return { success: true };
      } else {
        set({ isLoading: false });
        return { success: false, error: result.message };
      }
    } catch (error) {
      set({ isLoading: false });
      return { success: false, error: error.message };
    }
  },

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        "http://192.168.100.21:3000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const result = await response.json();

      if (result.success) {
        await AsyncStorage.setItem("user", JSON.stringify(result.user));
        await AsyncStorage.setItem("token", result.token);
      }

      if (response.ok) {
        set({ user: result.user, token: result.token, isLoading: false });
        return { success: true };
      }
    } catch (error) {
      set({ isLoading: false });
      return { success: false, error: error.message };
    }
  },

  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const storedUser = await AsyncStorage.getItem("user");
      const storedToken = await AsyncStorage.getItem("token");

      if (storedUser && storedToken) {
        set({
          user: JSON.parse(storedUser),
          token: storedToken,
          isLoading: false,
        });
        return { success: true };
      } else {
        set({ user: null, token: null, isLoading: false });
        return { success: false };
      }
    } catch (error) {
      set({ user: null, token: null, isLoading: false });
      return { success: false, error: error.message };
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
