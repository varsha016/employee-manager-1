import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const addEmployee = createAsyncThunk("employee/add", async (employeeData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post('http://localhost:5000/employee', employeeData)

    } catch (error) {
        return rejectWithValue(error)
    }

})
export const getEmployee = createAsyncThunk("Employee/get", async (arg, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get('http://localhost:5000/employee')
        return data
    } catch (error) {
        return rejectWithValue(error)
    }

})
export const updateEmployee = createAsyncThunk("Employee/update", async (employeeData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.put(`http://localhost:5000/employee/${employeeData.id}`, employeeData)
        return data
    } catch (error) {
        return rejectWithValue(error)

    }

})
export const deleteEmployee = createAsyncThunk("Employee/delete", async (employeeDataId, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.delete(`http://localhost:5000/employee/${employeeDataId}`)
        return data
    } catch (error) {
        return rejectWithValue(error)

    }

})