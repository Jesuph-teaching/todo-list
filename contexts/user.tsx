import { createContext } from "react";

export interface UserI {
  email: string;
  name: string;
}
export interface UserContextType {
  user: null | UserI;
  setUser: (user: UserI) => void;
  removeUser: () => void;
}
const UserContext = createContext<UserContextType | null>(null);
// equivalent in JS :
// const UserContext = createContext(null);
export default UserContext;
