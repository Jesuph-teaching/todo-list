import { getUserData } from "@/api/auth";
import { axiosConfig } from "@/api/configure";
import UserContext, { UserI } from "@/contexts/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserI | null>(null);
  const [token, setToken] = useState<string | null>(null);
  function SetTokenApp(token: string) {
    // update axios headers
    axiosConfig.defaults.headers["Authorization"] = "Bearer " + token;
    AsyncStorage.setItem("token", token).then(() => {
      setToken(token);
    });
  }
  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === "active") {
        // check if token exist
        AsyncStorage.getItem("token").then((token) => {
          if (token) SetTokenApp(token);
        });
      }
    };
    const sub = AppState.addEventListener("change", handleAppStateChange);
    return () => {
      sub.remove();
    };
  }, []);
  useEffect(() => {
    if (token)
      getUserData().then((data) => {
        setUser(data);
      });
  }, [token]);
  return (
    <UserContext.Provider
      value={{
        user: user,
        token: token,
        setToken: SetTokenApp,
        setUser: (user: UserI) => {
          setUser(user);
        },
        removeUser: () => {
          setUser(null);
          setToken(null);
          AsyncStorage.removeItem("token");
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
