import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    message : '',
}

const toastSlice = createSlice({
    name:'toast',
    initialState,
    reducers:{
        showSuccessToast : (state,action) => {
            state.message = action.payload;
            toast.success(state.message,{autoClose: 1500});
        },
        showErrorToast : (state,action) => {
            state.message = action.payload;           
            toast.error(state.message,{autoClose: 1500});
        }
    }
});

export const {showSuccessToast, showErrorToast} = toastSlice.actions; 
export default toastSlice;