//这是仓库管理员

import { NUM_ADD, NUM_REDUCE, NUM_FRUIT_INIT } from '../actionTypes';


//最初始的仓库数据
const defaultState = {
    num: ''
  };

//暴露一个函数出去  会在函数中写很多的小逻辑
export default (state =defaultState,action)=>{
    // state是组件中要使用的数据 
    // action 来区分做什么事 
    // 必须要返回一个state


    switch (action.type) {
      case NUM_ADD:
        {
          let newState = JSON.parse(JSON.stringify(state));
          newState.num += action.value;
          return newState;
        }
        
      case NUM_REDUCE:
        {
          let newState = JSON.parse(JSON.stringify(state));
          newState.num -= action.value;
          return newState;
        }

      case NUM_FRUIT_INIT:
        {
          let newState = JSON.parse(JSON.stringify(state));
          newState.num = action.value;
          return newState;
        }
    
      default:
        break;
    }


    return state;
  }
