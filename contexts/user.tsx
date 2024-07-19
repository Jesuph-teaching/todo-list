import { createContext } from "react";
// modify this bellow
export interface UserI {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}
// add this bellow
export interface UserAuthI {
  user: UserI;
  accessToken: string;
}
export interface UserContextType {
  user: null | UserI;
  token: null | string;
  setToken: (token: string) => void;
  setUser: (user: UserI) => void;
  removeUser: () => void;
}
const UserContext = createContext<UserContextType | null>(null);
// equivalent in JS :
// const UserContext = createContext(null);
export default UserContext;
