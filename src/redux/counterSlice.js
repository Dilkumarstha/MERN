import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name:"dialn",
    address:{
      country:"nepal",
      state:"gorkah"
    }
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
   incrementById:(state,action)=>{
    state.count = state.count + action.payload;
   }
  },
});

export const { increment, decrement ,incrementById} = counterSlice.actions;
export default counterSlice.reducer;
