import axios from "axios";

export const axiosConfig= axios.create({
    baseURL: "http:/192.168.29.162:4000/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});