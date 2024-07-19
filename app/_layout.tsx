import UserProvider from "@/providers/UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Slot />
        </UserProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
}
