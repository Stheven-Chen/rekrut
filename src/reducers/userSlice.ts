import {createSlice}  from '@reduxjs/toolkit';

interface User{
    nama:any
    user:any
    pass:any
}

const initialState:User = {
    nama:'',
    user:'',
    pass:''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login:(state, action)=>{
            state.user = action.payload.user;
            state.nama = action.payload.nama;
        },
        logout: (state, action) => {
            state.user = action.payload.user;
            state.nama = action.payload.name;
           
          },
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
export type RootState = ReturnType<typeof userSlice.reducer>;