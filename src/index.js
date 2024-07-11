// react 核心库文件，包括react的生命周期和组件创建方法
import React from 'react';
// react渲染到dom相关到库，负责管理dom的操作 client用于浏览器处理
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './transition/App';
// 性能评分指标
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    //  严格模式
  // <React.StrictMode>
    <App />
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
