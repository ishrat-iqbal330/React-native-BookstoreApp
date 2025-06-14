import { Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "../components/SafeScreen";
import { StatusBar } from "expo-status-bar";
import { useAuthStore } from "../store/Authstore";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  const { hydrate, user, token } = useAuthStore();

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      await hydrate();
      setIsAppReady(true);
    };
    
    initializeApp();
  }, []);

  useEffect(() => {
    if (!isAppReady) return;

    const inAuthScreen = segments[0] === "(auth)";
    const isSignedIn = user && token;

    if (!inAuthScreen && !isSignedIn) {
      router.replace("/(auth)/");
    } else if (inAuthScreen && isSignedIn) {
      router.replace("/(tabs)");
    }
  }, [user, token, segments, isAppReady]);

  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
        </Stack>
        <StatusBar style="dark" />
      </SafeScreen>
    </SafeAreaProvider>
  );
}
