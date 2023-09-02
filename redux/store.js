import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './customerSlice';
import cartSlice from './cartSlice';
import toastSlice from './toastSlice';

const store = configureStore({
    reducer:{
        customer: customerSlice.reducer,
        cart: cartSlice.reducer,
        toast: toastSlice.reducer
    }
})

export default store;