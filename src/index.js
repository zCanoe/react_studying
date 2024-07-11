// react 核心库文件，包括react的生命周期和组件创建方法
import React from 'react';
// react渲染到dom相关到库，负责管理dom的操作 client用于浏览器处理
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 性能评分指标
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, createBrowserRouter, createRoutesFromElements, Link,
  Route, RouterProvider,
  Routes,
  useLocation, useMatch, useParams, useSearchParams,
} from 'react-router-dom';
import Layout from './layout';

function Bpp() {
  console.log(useLocation());
  return (
      <div>
        this is Bpp
      </div>
  )
}

function User() {
  const params = useParams();
  const [ searchParams, setParams ] = useSearchParams();
  const match = useMatch("/user/:id")

  console.log(params);
  return (
      <div>
        { params.id }
        <button onClick={() => { setParams({ name: "Kobe", pwd: "123" }) }}>setParams</button>
        <button>
          <Link to="/bpp" >Bpp</Link>
        </button>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const browserRouter = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/app" element={<App/>}></Route>
        <Route path="/bpp" element={<Bpp/>}></Route>
        <Route path="/user/:id" element={<User/>}></Route>
      </Route>
));
root.render(
    //  严格模式
  // <React.StrictMode>
    <RouterProvider router={browserRouter} />
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
