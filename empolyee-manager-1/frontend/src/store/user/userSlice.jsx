import { createSlice } from "@reduxjs/toolkit";
import userAddAction, { getUserAction, userLoginAction } from "./userAction";

const userSlice = createSlice({
    name: "users",
    initialState: { users: [] },
    reducers: {
        logOutUser(state) {
            state.loginUsers = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userAddAction.pending, (state, { payload }) => {
                state.loading = true

            })
            .addCase(userAddAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userAdd = true
            })
            .addCase(userAddAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(userLoginAction.pending, (state, { payload }) => {
                state.loading = true

            })
            .addCase(userLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.loginUsers = payload
            })
            .addCase(userLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(getUserAction.pending, (state, { payload }) => {
                state.loading = true

            })
            .addCase(getUserAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
            })
            .addCase(getUserAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


    }
})
export default userSlice.reducer
export const { logOutUser } = userSlice.actions