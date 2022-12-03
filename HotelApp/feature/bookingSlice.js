import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import getAPI from "../app/api";

const API = getAPI({req: `pemesanan`});

const initialState = {
    isPemesananPending: false,
    isPemesananSuccess: false,
    errorMessage: '',
    pemesanan: {}
}

function callPemesananApi(Room, Day, Person, Date, item){
    const kode = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const totalBayar = (Room, Day, Person, item) =>{
        var result = Room * Day * Person * item.harga_hotel;
        return result;

    }
    return new Promise(function(){
        setTimeout(() => {
                const requestingData = {
                    kode_pemesanan: kode(10),
                    id_user: localStorage.getItem("id"),
                    id_hotel: item.id,
                    kamar: Room,
                    hari: Day,
                    orang: Person,
                    checkin: Date,
                    total_bayar: totalBayar(Room, Day, Person, item),
                    status: "belum di bayar"
                }
                axios({
                    method: "POST",
                    url: API,
                    data: requestingData
                }).then((result) => {
                    window.alert("Booking succes !")
                    window.location.replace("/")
                }).catch((error) => window.alert("Email atau Password salah!", error))
            
        }, 5)
    })
}

export const authPemesananApi = createAsyncThunk('auth/pemesanan', async({Room, Day, Person, Date, item}) => {
    try{
        const response = await callPemesananApi(Room, Day, Person, Date, item)
        return response.Date
    }catch(err){
        throw(err)
    }
})

const authPemesananSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(authPemesananApi.pending, (state) => {
            state.isPemesananPending = true
        })
        .addCase(authPemesananApi.fulfilled, (state, action) => {
            console.log('fulfilled')
            console.log(action)
            const {Date} = action.payload
            state.isPemesananPending = false
            state.isPemesananSuccess = true
            state.pemesanan = {Date}
        })
        .addCase(authPemesananApi.rejected, (state,action) => {
            console.log(action, "rejected")
            state.isPemesananPending = false
            state.isPemesananSuccess = false
            state.errorMessage = action.error.message
        })
    }
})

export default authPemesananSlice.reducer