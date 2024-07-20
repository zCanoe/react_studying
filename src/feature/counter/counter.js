import {createSlice} from '@reduxjs/toolkit';

const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    statue: ""
  },
  reducers: {
    increament(state){
      return state + 1;
    },
    decreament(state) {
      return state - 1;
    }
  }
})

export const { increament, decreament } = counter.actions;
export const selectore = (state) => state.value;
export default counter
