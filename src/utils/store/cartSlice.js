import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        price: 0,
    },
    reducers: {
        addItems: (state, action) => {
            let totalPrice = 0;
            state.items.push(action.payload)
            state.items.forEach(item => {
                totalPrice = totalPrice + item.card.info.price
            })
            state.price = totalPrice / 100
        },
        removeItems: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

export const { addItems, removeItems, clearCart } = cartSlice.actions

export default cartSlice.reducer