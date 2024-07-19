import useUser from "@/hooks/useUser";
import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Profile() {
  const { removeUser } = useUser();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40,
      }}
    >
      <Text variant="headlineMedium">Profile</Text>
      <Button
        onPress={() => {
          removeUser();
          console.log("clicked");
        }}
        mode="contained"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        labelStyle={{
          fontSize: 24,
          lineHeight: 50,
        }}
      >
        Logout
      </Button>
    </View>
  );
}
