import axios from "axios";
import {IUser} from "../types/IUser.ts";


export const getUser = async (id: number) => {
    const response = await axios.get(`https://lexan-kombat-server-production.up.railway.app/api/user/${id}`)
    return response.data
}

export const createUser = async (user: IUser) => {
    const response = await axios.post('https://lexan-kombat-server-production.up.railway.app/api/user/', user)
    return response.data
}