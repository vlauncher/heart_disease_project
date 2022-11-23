import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get user from LocalStorage
const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
    user:user ? user : null ,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

/* Actions Start */
export const userregister = createAsyncThunk('auth/register',async(userdata,thunkApi)=>{
    try {
        const response = await axios.post('http://localhost:8000/auth/users/',userdata)
        if(response.data){
            localStorage.setItem('user',JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
        const message = (error.response.data.email[0] || error.response.data.first_name[0] || error.response.data.last_name[0] || error.response.data.password[0])
        return thunkApi.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/login',async(userdata,thunkApi)=>{
    try {
        const response = await axios.post('http://localhost:8000/auth/jwt/create/',userdata)
        if(response.data){
            localStorage.setItem('user',JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
         const message = error.response.data.detail
        return thunkApi.rejectWithValue(message)
    }
})
export const logout = createAsyncThunk('auth/logout',async ()=>{
    localStorage.removeItem('user');
})

/* Actions Ends */

/* Reducer Starts */

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state) =>{
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userregister.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(userregister.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(userregister.rejected,(state,action)=>{
                state.isError = true
                state.user=null
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(login.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected,(state,action)=>{
                state.isError = true
                state.user=null
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(logout.fulfilled,(state)=>{
                state.user = null
            })
    }
})

/* Reducer Ends */

export const { reset } = authSlice.actions
export default authSlice.reducer;

