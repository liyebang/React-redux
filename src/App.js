import React,{ Component } from 'react';

//引入action类型
// import { NUM_ADD,NUM_REDUCE } from './store/actionTypes';

//优化：导入action
import { num_fruit_add, num_fruit_reduce , num_fruit_init } from './store/actionCreators';


//1.引入一个可以接受仓库的函数connent
import { connect } from "react-redux";


class App  extends Component{
  //页面初次渲染完毕就执行代码
  componentDidMount(){
    this.props.num_init()
  }
  render() {
    return (
       <div>
         数字:{this.props.num}
         <br />
         <button onClick={this.props.num_add}>+</button>
         <button onClick={this.props.num_reduce}>-</button>
       </div>
    );
  }
}

// 2 将 app改成 连接函数的 方式
// connect 第一个参数 是实现 store中的数据 和 组件中的 属性的映射
const mapStateToProps = (state) => {
  return {
    num: state.fruitReducer.num
  }
}


//新建一个action 和 props 的映射对象
const mapDispatch = (dispatch) => {
  return {
    num_add: () => {
      // const action = {
      //   type: NUM_ADD,
      //   value: 1
      // }
      //优化，使用函数返回值的形式传值
      dispatch(num_fruit_add());
    },
    num_reduce: () => {
      // const action = {
      //   type: NUM_REDUCE,
      //   value: 1
      // }
      dispatch(num_fruit_reduce(10));
    },
    num_init: () => {
      dispatch(num_fruit_init())
    }
  }
}


// export default App;
// export default connect(mapStateToProps, null)(App);
export default connect(mapStateToProps, mapDispatch)(App);







