import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: "Jai Shree Ram",
  reducers: {},
});

// export const {} = cartSlice.actions;
export default cartSlice.reducer;
