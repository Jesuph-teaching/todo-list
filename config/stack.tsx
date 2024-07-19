import { ExpoRouter } from "expo-router/types/expo-router";
import { Button } from "react-native-paper";
import { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types";

export const defaultStackOptions: (
  router: ExpoRouter.Router
) => NativeStackNavigationOptions = (router) => ({
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
});
