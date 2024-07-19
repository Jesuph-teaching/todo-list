import { defaultStackOptions } from "@/config/stack";
import { Stack, useRouter } from "expo-router";
import React from "react";

export default function AuthLayout() {
  const router = useRouter();
  return (
    <Stack screenOptions={defaultStackOptions(router) as any}>
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Login",
        }}
      />
    </Stack>
  );
}
