import { createStore } from "redux";
//providing the store in the top component
// so providing in the index.js
const initialState = { vote: 0, toggle: true };
// console.log(initialState);
const reducer = (state = initialState, action) => {
  //   console.log(state.vote);
  //if we not pass the all properties than our data may be lose...
  //so to avoid it pass the data in every action
  if (action.type === "increment") {
    return { vote: state.vote + 1, toggle: state.toggle };
  } else if (action.type === "decrement") {
    return { vote: state.vote - 1, toggle: state.toggle };
  } else if (action.type === "toggle") {
    return { vote: state.vote, toggle: !state.toggle };
  }
  return { vote: state.vote, toggle: state.toggle };
};

const store = createStore(reducer, initialState);
// store.dispatch({ type: "increment" });
// console.log(createStore(reducer));
// console.log(store.getState());
export default store;
