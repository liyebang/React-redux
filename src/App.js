import React,{ Component } from 'react';

//1.引入一个可以接受仓库的函数connent
import { connect } from "react-redux";


class App  extends Component{
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
    num: state.num
  }
}


//新建一个action 和 props 的映射对象
const mapDispatch = (dispatch) => {
  return {
    num_add: () => {
      const action = {
        type: 'num_add',
        value: 1
      }
      dispatch(action);
    },
    num_reduce: () => {
      const action = {
        type: 'num_reduce',
        value: 1
      }
      dispatch(action);
    }
  }
}


export default connect(mapStateToProps, mapDispatch)(App);


// export default connect(mapStateToProps, null)(App);



// export default App;
