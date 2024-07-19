import { login } from "@/api/auth";
import useUser from "@/hooks/useUser";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function Login() {
  const { setUser, user, setToken } = useUser();

  const LoginMutation = useMutation({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.accessToken);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
          <Ionicons
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        mode="contained"
        disabled={LoginMutation.isPending}
        onPress={() => {
          LoginMutation.mutate({ email, password });
        }}
        icon={LoginMutation.isPending ? "loading" : "login"}
        style={{ width: "100%" }}
      >
        {LoginMutation.isPending ? "Logging in" : "Login"}
      </Button>
    </View>
  );
}
