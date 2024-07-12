import UserContext from "@/contexts/user";
import useUser from "@/hooks/useUser";
import { Redirect } from "expo-router";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, user } = useUser();
  if (user) return <Redirect href="/" />;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
        gap: 20,
      }}
    >
      <Text variant="displayLarge">Login</Text>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        style={{
          width: "100%",
        }}
        onChangeText={setEmail}
      />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        secureTextEntry={!showPassword}
        onChangeText={setPassword}
        style={{
          width: "100%",
        }}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        mode="contained"
        onPress={() => {
          setUser({
            email,
            name: "John Doe",
          });
        }}
        style={{ width: "100%" }}
      >
        Login
      </Button>
    </View>
  );
}
