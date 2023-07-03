import { createStore } from "./redux";

const initialState = { count: 0 };
type Actions =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "incrementBy"; payload: number }
  | { type: "decrementBy"; payload: number }
  | { type: "setCount"; payload: number };

const reducer = (state: typeof initialState, action: Actions) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementBy":
      return { count: state.count + action.payload };
    case "decrementBy":
      return { count: state.count - action.payload };
    case "setCount":
        return { count: action.payload };
    default:
      return state;
  }
};
const store = createStore(initialState, reducer);



window.myRange.addEventListener('input', (e)=>{
    const value = parseInt((e.target as HTMLInputElement).value);
    store.dispatch({type:'setCount', payload:value})
})

store.subscribe(newState=>{
    window.demo.innerText = newState.count.toString();
})