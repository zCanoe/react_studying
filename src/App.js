import './App.css';
import React, {
  createContext,
  forwardRef, useContext,
  useEffect,
  useRef, useState,
} from 'react';
import {useParams} from 'react-router-dom';

// class App extends React.Component {
//   constructor(prop) {
//     super(prop);
//     console.log("构造函数执行");
//     this.state = {
//       name: 'canoe'
//     }
//   }
//
//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps执行了");
//     return {}
//   }
//
//
//   // 组件挂在完成时执行
//   componentDidMount() {}
//
//
//   handleClick=() => {
//     this.setState({
//       name: "canoe1"
//     })
//   }
//
//   render() {
//     console.log("render执行");
//     return (
//         <div>
//           <h1>{this.state.name}</h1>
//           <button onClick={this.handleClick}>修改</button>
//         </div>
//   )
//   }
//
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     // 返回值传递给didComponentUpdate钩子的snapshot参数
//     // 应用场景：长列表渲染记住滚轮的原始位置，并传递给update。保证数据更新时滚轮在原始的位置
//     console.log(prevProps, prevState);
//     return "snap"
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(prevProps, prevState, snapshot);
//   }
// }

// function Bpp() {
//   useEffect(() => {
//     console.log("Bpp useEffect执行");
//
//     return console.log("Bpp useEffect回掉执行");
//   })
//
//   return (
//       <div>
//         This is Bpp
//       </div>
//   )
// }

// function getCount(count) {
//   console.time("计算开始")
//   let res = 0;
//   for(let i = 0; i < (count * 10000); i ++){
//     res ++;
//   }
//   console.timeEnd("计算开始")
//   return res;
// }
// function Bpp() {
//   const [ count, UseCount ] = useState(1);
//
//   const getCount = useMemo((count) => {
//       console.time("计算开始")
//      let res = 0;
//      for(let i = 0; i < (count * 10000); i ++){
//       res ++;
//     }
//     console.timeEnd("计算开始")
//     return res;
//   }, [count])
//
//   return (
//       <div>
//         { count }
//         Expensive Calculation { getCount }
//         <button onClick={ () => { UseCount(count => count + 1) } }>+count</button>
//       </div>
//   )
// }

const MyContext = createContext(null);

const Bpp = forwardRef((props, ref) => {
  // const data = useContext(MyContext);

  return (
      <div>
        {/*{data.name}*/}
        <Cpp/>
      </div>
  )
})

function Cpp() {
  const { name, setName } = useContext(MyContext);

  function handleClick() {
    setName("canoe1")
  }

  return (
      <div>
        <h2>{ name }</h2>
        <button onClick={ handleClick }></button>
      </div>
  )
}


function App() {
  const input = useRef()
  const [ name, setName ] = useState("canoe");

  useEffect(() => {
    console.log(input);
  }, []);

  return (
      <MyContext.Provider value={ {
        name,
        setName
      } }>
        <div>
          <Bpp/>
        </div>
      </MyContext.Provider>
  )
}

export default App;
