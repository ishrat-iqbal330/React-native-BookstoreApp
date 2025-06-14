import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import COLORS from "../../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {

  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.textSecondary,
        tabBarInactiveTintColor: "gray",
        paddingBottom: 8,
        headerTitleStyle: {
          color: COLORS.textPrimary,
          fontWeight:"600",
        },
        headerShadowVisible: false,
        tabBarStyle:{
          backgroundColor:COLORS.background,
          borderTopWidth:1,
          borderTopColor:COLORS.border,
          paddingTop : -3,
          paddingBottom: insets.bottom,
          height:60 + insets.bottom,



        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
