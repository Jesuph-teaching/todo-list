import UserContext, { UserI } from "@/contexts/user";
import React, { useState } from "react";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserI | null>(null);
  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: (user: UserI) => {
          setUser(user);
        },
        removeUser: () => {
          setUser(null);
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
