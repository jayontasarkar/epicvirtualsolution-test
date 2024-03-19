import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";



const initialState: { data: TCartProduct[] }= {
  data: []
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addItemIntoCart: (state, action: PayloadAction<TCartProduct>) => {
      const findIndex = state.data.findIndex(item => item.Title === action.payload.Title);
      if (findIndex > -1) {
        state.data[findIndex].Quantity = state.data[findIndex].Quantity + action.payload.Quantity;
      } else {
        state.data.push(action.payload);
      }
    },
    subtractCartItemQuantity: (state, action: PayloadAction<TCartProduct>) => {
      const findIndex = state.data.findIndex(item => item.Title === action.payload.Title);
      if (findIndex > -1) {
        const quantity = action.payload.Quantity;
        if (quantity > 0) {
          state.data[findIndex].Quantity = state.data[findIndex].Quantity - quantity;  
        }
      }
    },
    removeItemFromCart: (state, action: PayloadAction<TCartProduct>) => {
      const findIndex = state.data.findIndex(item => item.Title === action.payload.Title);
      if (findIndex > -1) {
        state.data.splice(findIndex, 1);
      }
    }
  }
});

// Selector functions
export const countProductsOnCart = (state: RootState) => {
  const count = state.cart.data.reduce((acc, curr) => acc + curr.Quantity, 0);
  return count;
};

export const totalAmountOnCart = (state: RootState) => {
  const count = state.cart.data.reduce((acc, curr) => acc + (curr.Quantity * parseFloat(curr.Price)), 0);
  return count;
};

// Actions
export const { addItemIntoCart, subtractCartItemQuantity, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;