import useUser from "@/hooks/useUser";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
  const { user } = useUser();
  if (!user) return <Redirect href="/auth/login" />;
  // in case we wanted to add context to todo list we add it here
  return <Slot />;
}
