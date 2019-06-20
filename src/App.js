import React,{ Component } from 'react';

//1.引入一个可以接受仓库的函数connent
import { connect } from "react-redux";


class App  extends Component{
  render() {
    return (
       <div>
         数字:{this.props.num}

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
export default connect(mapStateToProps, null)(App);



// export default App;
