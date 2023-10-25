import { createSlice } from "@reduxjs/toolkit";

// Initialize the cart state with the data from localStorage or an empty array
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart', // Define the name of the slice
    initialState, // Set the initial state for the cart slice

    reducers : {
        addToCart(state, action){
            state.push(action.payload) // Add an item to the cart by modifying the state         
        },
        deleteFromCart(state,action){
            return state.filter(item => item.id != action.payload.id); // Remove an item from the cart by filtering it out of the state
        }
    }
})

export const {addToCart, deleteFromCart} = cartSlice.actions;

export default cartSlice.reducer;  
