//新建仓库

//1.引入仓库管理员
import reducer from "./reducers";

//2.引入仓库生成器
//4.引入redux的中间件连接器
import {  createStore, applyMiddleware } from "redux";

//5. 引入异步action的库
import reduxThunk from 'redux-thunk';


//3.把仓库和管理员暴露出去
//6.把 createStore 的第二个参数中 传递 过去
export default createStore(reducer,applyMiddleware(reduxThunk));