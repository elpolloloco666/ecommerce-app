import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import toastSlice from './toastSlice';

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        toast: toastSlice.reducer
    }
})

export default store;