import UserProvider from "@/providers/UserProvider";
import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";
export default function RootLayout() {
  return (
    <PaperProvider>
      <UserProvider>
        <Slot />
      </UserProvider>
    </PaperProvider>
  );
}
