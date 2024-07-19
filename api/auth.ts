import { UserI ,UserAuthI} from "@/contexts/user";
import { axiosConfig } from "./configure";

export  const login = async ({email,password}:{email: string, password: string}) => {
    const response = await axiosConfig.post("/auth/login", {
        email,
        password,
    });
    return response.data as UserAuthI;
}
export const register = async (user: UserI & {password:string}) => {
    const response = await axiosConfig.post("/auth/register", user);
    return response.data as UserAuthI;
}
export const getUserData = async () => {
    const response = await axiosConfig.get("/auth");
    return response.data as UserI;
}