import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:0,
    firstName: '',
    lastName:'',
    email:'',
    isLoggedIn: false
}

const customerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
        logIn: (state,action) => {
            state.userName = action.payload;
            state.isLoggedIn = true;
        },
        logOut: state => {
            state = initialState;
        }
    }
});

export const {logIn,LogOut} = customerSlice.actions;

export default customerSlice;