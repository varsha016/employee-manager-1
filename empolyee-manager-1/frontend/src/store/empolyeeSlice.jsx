import { createSlice } from "@reduxjs/toolkit";
import { addEmployee, deleteEmployee, getEmployee, updateEmployee } from "./employeeAction";


const employeeSlice = createSlice({
    name: "employee",
    initialState: { employee: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(addEmployee.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addEmployee.fulfilled, (state, { payload }) => {
                state.loading = false
                state.employeeAdded = state.employeeAdded ? true : false
            })
            .addCase(addEmployee.rejected, (state, { payload }) => {
                state.loading = false
                state.employeeAddError = payload
            })
            .addCase(getEmployee.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getEmployee.fulfilled, (state, { payload }) => {
                state.loading = false
                state.employee = payload
            })
            .addCase(getEmployee.rejected, (state, { payload }) => {
                state.employeeGetError = payload
            })
            .addCase(updateEmployee.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateEmployee.fulfilled, (state, { payload }) => {
                state.loading = false
                state.updated = state.updated ? true : false
            })
            .addCase(updateEmployee.rejected, (state, { payload }) => {
                state.employeeUpdateError = payload
            })
            .addCase(deleteEmployee.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(deleteEmployee.fulfilled, (state, { payload }) => {
                state.loading = false
                state.deleteEmployees = state.deleteEmployees ? false : true
            })
            .addCase(deleteEmployee.rejected, (state, { payload }) => {
                state.employeeUpdateError = payload
            })

    }

})
export default employeeSlice.reducer