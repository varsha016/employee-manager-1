import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./empolyeeSlice"
import userSlice from "./user/userSlice";


const store = configureStore({
    reducer: {
        allEmpolyee: employeeSlice,
        allUsers: userSlice
    }
})
export default store