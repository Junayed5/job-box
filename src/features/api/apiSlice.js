import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



const apiSlice =createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jobbox-server-red.vercel.app/",
    }),
    tagTypes:["Jobs", "Job"],
    endpoints:(builder)=>({}),
})

export default apiSlice