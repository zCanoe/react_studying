function applyMiddleware(middleware) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);

    return {
      ...store,
      dispatch: middleware(store)(store.dispatch)
    }

  }
}

function combineReducers(reducerMap) {

  return (action, state = {}) => {
    const newState = {};
    console.log(state);
    for (const reducerMapKey in reducerMap) {
      newState[reducerMapKey] = reducerMap[reducerMapKey](action, state[reducerMapKey]);
    }

    return newState;
  }
}
function createStore(reducer, handler) {
  if(handler && typeof handler === 'function') {
    return handler(createStore)(reducer)
  }
  let state;
  let listners = [];
  // 初始化state
  state = reducer({}, state);

  function subscribe(callback) {
    listners.push(callback);
  }

  function dispatch(action) {
    // 执行订阅函数
    listners.forEach(item => item())
    state = reducer(action, state);
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}
