import { createStore } from 'redux';

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const countModifier = (state = 0, action) => {
  console.log(state, action);
  return state;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());