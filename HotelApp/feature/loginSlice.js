import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import getAPI from "../app/api";

const API = getAPI({req: `users/login`});

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    errorMessage: '',
    user: {}
}

function callLoginApi(Email, Password){
    console.log(Email, Password)
    return new Promise(function(){
        setTimeout(() => {
                const requestingData = {
                    email: Email,
                    password: Password
                }
                axios({
                    method: "POST",
                    url: API,
                    data: requestingData
                }).then((result) => {
                    localStorage.setItem("id", result.data.users.id)
                    window.location.replace("/")
                }).catch((error) => window.alert("Email atau Password salah!", error))
            
        }, 5)
    })
}

export const authLoginApi = createAsyncThunk('auth/login', async({Email, Password}) => {
    try{
        const response = await callLoginApi(Email, Password)
        return response.Email
    }catch(err){
        throw(err)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(authLoginApi.pending, (state) => {
            state.isLoginPending = true
        })
        .addCase(authLoginApi.fulfilled, (state, action) => {
            console.log('fulfilled')
            console.log(action)
            const {Email} = action.payload
            state.isLoginPending = false
            state.isLoginSuccess = true
            state.user = {Email}
        })
        .addCase(authLoginApi.rejected, (state,action) => {
            console.log(action, "rejected")
            state.isLoginPending = false
            state.isLoginSuccess = false
            state.errorMessage = action.error.message
        })
    }
})

export default authSlice.reducer