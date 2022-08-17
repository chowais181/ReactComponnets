import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { vote: 0, toggle: true };

const reducers = {
  increment: (state) => {
    state.vote++;
  },
  decrement: (state) => {
    state.vote--;
  },
  toggle: (state) => {
    state.toggle = !state.toggle;
  },
  addbyten: (state, action) => {
    state.vote = state.vote + action.payload;
  },
};
const voteSlice = createSlice({
  name: "votes",
  initialState,
  reducers,
});

const Store = configureStore({
  reducer: { votes: voteSlice.reducer },
});

// console.log(Store.getState()); //for getting the state
export const actions = voteSlice.actions;
export default Store;
