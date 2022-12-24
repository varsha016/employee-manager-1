import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userAddAction = createAsyncThunk("users/add", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/users", userData)
    } catch (error) {
        rejectWithValue(error)


    }
})
export const userLoginAction = createAsyncThunk("users/login", async (loginData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/users")
        const res = data.find(item => item.email === loginData.email && item.password === loginData.password)
        console.log(res);
        return res

    } catch (error) {
        return rejectWithValue(error)


    }
})
export const getUserAction = createAsyncThunk("users/get", async (arg, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/users")
        return data
    } catch (error) {
        return rejectWithValue(error)


    }
})
export default userAddAction