import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemList: [],
    total: 0,
    productQuantity:0
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addProduct: (state,action) => {
            const product = action.payload; 
            const existingItem = state.itemList.find(item => item.id === product.id); 
            if(existingItem){
                existingItem.quantity+=product.quantity ? product.quantity : 1; 
                existingItem.total+= product.quantity ? existingItem.price*product.quantity: existingItem.price;
            }else {
                const newItem = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    total: product.quantity? product.price*product.quantity : product.price,
                    quantity: product.quantity ? product.quantity : 1,
                    image: product.image,
                    stock: product.stock
                }
                state.itemList = [...state.itemList,newItem];
            }
            state.productQuantity+=product.quantity? product.quantity : 1;
            if(product.quantity && product.price){
                state.total+= product.quantity * product.price;
            }else{
                state.total+= product.price ? product.price : existingItem.price;
            }
            
        },
        removeProduct: (state,action) => {
            const id = action.payload;
            const existingItem = state.itemList.find(item => item.id === id); 
            if(existingItem){
                state.productQuantity-= existingItem.quantity;
                state.total -= existingItem.total;
                state.itemList = state.itemList.filter(item => item.id !== id);
            }
        },
        subtractProduct: (state,action) => {
            const id = action.payload;
            const existingItem = state.itemList.find(item => item.id === id); 
            if(existingItem){
                existingItem.total -= existingItem.price;
                existingItem.quantity --;
                state.productQuantity --;
                state.total -= existingItem.price;
            }
        }
    }
});

export const { addProduct, removeProduct, subtractProduct } = cartSlice.actions;

export default cartSlice;