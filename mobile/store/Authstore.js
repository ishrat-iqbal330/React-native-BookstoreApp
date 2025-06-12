import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoading: false,

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
  login: async (data) => {
    set({ isLoading: true });

    try {
      const response = await fetch(
        "http://192.168.100.21:3000/api/auth/login",
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
}));
