import UserContext from "@/contexts/user";
import React, { useContext } from "react";

export default function useUser() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
