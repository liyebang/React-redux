//新建仓库

//1.引入仓库管理员
import reducer from "./reducers";

//2.引入仓库生成器
import {  createStore } from "redux";


//3.把仓库和管理员暴露出去
export default createStore(reducer);