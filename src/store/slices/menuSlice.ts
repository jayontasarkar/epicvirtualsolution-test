import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { data: TNavMenu } = {
  data: {}
}

const menuSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    addItemsIntoMenu: (state, action: PayloadAction<TNavMenu>) => {
      state.data = action.payload;
    }
  }
});

export const { addItemsIntoMenu } = menuSlice.actions;

export default menuSlice.reducer;