import { defaultStackOptions } from "@/config/stack";
import { Stack, useRouter } from "expo-router";
import React from "react";

export default function ApplicationLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        ...(defaultStackOptions(router) as any),
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
