import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const item = action.payload;
            state.items = state.items.filter(i => {
                if(i.id !== item.id){
                    return i;
                }
            })
        },
        clearCart: (state, action) => {
            state.items.length = [];
        }
    },
})

export const{addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;