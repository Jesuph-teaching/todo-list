import useUser from "@/hooks/useUser";
import { Redirect, useRouter } from "expo-router";
import { Image, View } from "react-native";
import { Button, Text as TextPaper } from "react-native-paper";
export default function Index() {
  const router = useRouter();
  const { user } = useUser();
  if (user) return <Redirect href="/application" />;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 40,
        gap: 20,
      }}
    >
      <Image
        source={require("@/assets/images/react-logo-3x.png")}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <TextPaper variant="displayLarge">MYAPP</TextPaper>
      <TextPaper variant="bodyLarge">Welcome to your new app!</TextPaper>
      <View
        style={{
          flex: 1,
          gap: 10,
        }}
      >
        <Button
          onPress={() => {
            router.push("/auth/login");
          }}
          contentStyle={{
            height: 60,
          }}
          labelStyle={{
            fontSize: 24,
            lineHeight: 60,
          }}
          mode="elevated"
        >
          Login
        </Button>
        <Button
          onPress={() => {
            router.push("/auth/register");
          }}
          contentStyle={{
            height: 60,
          }}
          labelStyle={{
            fontSize: 24,
            lineHeight: 60,
          }}
          mode="contained"
          style={{}}
        >
          Register
        </Button>
      </View>
    </View>
  );
}
