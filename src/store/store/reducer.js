import {add, sub} from './constrant';

const initialStore = {
  count: 0
}
export const reducer = (state = initialStore, action) => {
  switch (action.type){
    case add:
     return { ...state, count: state.count + action.count };
    case sub:
     return { ...state, count: state.count - action.count };
    default:
      return state;
  }
}
