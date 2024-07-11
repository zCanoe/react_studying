import './App.css';
import React, {
  useEffect, useLayoutEffect, useState,
} from 'react';

function Bpp() {
  const [show, setShow] = useState(false);

  return (
      <div>
        { show && <App /> }
        <button onClick={() => { setShow(!show) }}>bottom</button>
      </div>
  )
}


function App() {
  const [name, setName] = useState("canoe");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect状态发生变化", count);
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect状态发生变化", count);
  }, []);

  return (
        <div>
          {count}
          {name}
          <button onClick={() => { setName("canoe1") }}>name</button>
          <button onClick={() => { setCount((count) => count + 1) }}>count</button>
        </div>
  )
}

export default Bpp;
