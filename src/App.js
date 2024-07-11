import './App.css';
import React, {
  useEffect, useRef, useState,
} from 'react';
import {createStore} from '@reduxjs/toolkit';



function App() {
  function reducer(state, action) {
    if(typeof state === 'undefined') return 0;

    switch (action.type) {
      case 'counter/incremented':
        return state + 1;
      case 'counter/decremented':
        return state - 1;
    }
  }

  const store = createStore(reducer);

  store.subscribe(() => {
    text.current.innerText = store.getState();
    console.log(text.current.innerText);
    console.log("订阅函数");
  })

  const text = useRef();

  return (
        <div>
          <span ref={text}></span>
          <button onClick={() => { store.dispatch({ type: 'counter/incremented' }) }}>+1</button>
        </div>
  )
}

export default App;
