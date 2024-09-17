import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        loginSuccess: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        }
    }
})

export const  { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer