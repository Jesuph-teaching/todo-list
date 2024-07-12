import { Stack, useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native-paper";

export default function AuthLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerTitleAlign: "center",
        headerLeft: () => (
          <Button
            icon="arrow-left"
            onPress={() => {
              router.back();
            }}
          >
            {""}
          </Button>
        ),
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Login",
        }}
      />
    </Stack>
  );
}
