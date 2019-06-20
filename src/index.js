import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//1.引入仓库
import store from "./store";

//2.引入redux和react的链接工具
// Provider 提供者 是一个组件
import { Provider } from "react-redux";


//3.修改 APP结构
ReactDOM.render( <Provider  store={store} > <App/></Provider>  , document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

