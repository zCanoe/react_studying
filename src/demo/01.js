function compose(...args) {
  console.log(args);
  return (v) => args.reduceRight((res, cb) => cb(res), v);
}

function applyMiddleware(...middle) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);

    const patches = middle.map(item => item(store));
    console.log(compose(...middle));
    return {
      ...store,
      dispatch: compose(...patches)(store.dispatch)
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
