import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import useUser from "@/hooks/useUser";
import { Redirect, Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  const { user } = useUser();
  if (!user) return <Redirect href="/auth/login" />;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
