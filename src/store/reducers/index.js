//引入合并组件
import { combineReducers } from 'redux';

//引入需要合并的对象
import animalReducer from "./animalReducer";
import fruitReducer from './fruitReducer';

//合并之后导出
export default combineReducers({ animalReducer, fruitReducer })