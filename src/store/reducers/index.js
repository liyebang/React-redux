//这是仓库管理员

//最初始的仓库数据
const defaultState = {
    num: 10001
  };

//暴露一个函数出去  会在函数中写很多的小逻辑
export default (state =defaultState,action)=>{
    // state是组件中要使用的数据 
    // action 来区分做什么事 
    // 必须要返回一个state
    return state;
  }
