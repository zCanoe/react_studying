import './App.css';
import React, {
  forwardRef,
  useCallback,
  useEffect, useImperativeHandle, useLayoutEffect, useRef, useState,
} from 'react';

const Bpp = forwardRef((prop, ref) => {
  const { click } = prop;
  const h1 = useRef();

  // 自定义转发ref
  useImperativeHandle(ref, () => ({
    alters() {
      h1.current.innerHtml = "11";
    }
  }))

  return (
      <div>
        <h1 ref={h1} onClick={click}>Bpp</h1>
      </div>
  )
})


function App() {
  const [count, setCount] = useState(0);
  const bppRef = useRef();

  const click = useCallback(() => {
    window.alert(1);
  }, [])

  useEffect(() => {
    console.log(bppRef.current);
  }, [])

  return (
        <div>
          {count}
          <button onClick={() => { setCount((count) => count + 1) }}>count</button>
          <Bpp ref={bppRef} click={click}/>
        </div>
  )
}

export default App;
