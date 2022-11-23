import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, { payload }) => { 
      const hasItem = state.some(item => item.id === payload);
      if(!hasItem) return [ ...state, { id: payload, qtd: 1 } ];
      return state.filter((item) => item.id !== payload);
    },
    changeQtd: (state, { payload }) => {
      state = state.map(itemInCart => {
        if(itemInCart.id === payload.id) itemInCart.qtd += payload.qtd;
        return itemInCart;
      })
    },
    clearCart: () => initialState,
  }
})

export const { changeCart, changeQtd, clearCart } = cartSlice.actions;

export default cartSlice.reducer;