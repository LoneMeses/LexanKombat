import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser} from "../types/IUser.ts";
import {UserDTO, UsersForLeaderboard} from "../types/UserDTO.ts";


export const userApi = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://lexan-kombat-server-production.up.railway.app/api/user'}),
    endpoints: (build) => ({
        fetchUserFromDB: build.query<UserDTO, number>({
            query: (id: number) => ({
                url: `/${id}`,

            })
        }),
        createUser: build.mutation<IUser, IUser>({
           query: (user) => ({
               url: `/`,
               method: "POST",
               body: user
           })
        }),
        updateUser: build.mutation<string, UserDTO>({
            query: (user) => ({
                url: `/${user.user.id}`,
                method: "PATCH",
                body: user
            })
        }),
        fetchUsersForLead: build.query<UsersForLeaderboard[], null>({
            query: () => ({
                url: `/`,
            })
        })
    })
})