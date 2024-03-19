import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { data: TProductList } = {
  data: {}
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductsIntoList: (state, action: PayloadAction<TProductList>) => {
      state.data = action.payload;
    }
  }
});

export const { addProductsIntoList } = productSlice.actions;

export default productSlice.reducer;