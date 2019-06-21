//  引入异步请求工具
import axios from 'axios';

import { NUM_ADD, NUM_REDUCE, NUM_FRUIT_INIT } from '../actionTypes';


//水果 数量的增加
export const num_fruit_add = (unit) => {
    return {
        type: NUM_ADD,
        value: unit || 1
    }
}

//水果的数量减少
export const num_fruit_reduce = (unit) => {
    return {
        type: NUM_REDUCE,
        value: unit || 1
    }
}


//异步action 负责获取数据  num的数据初始化
export const num_fruit_init = () => {
    //返回函数
    return (dispatch) => {
        //发送异步请求
        axios.get("https://easy-mock.com/mock/5cff5f447806440acf2c6856/baseList/").then(res => {
            console.log(res);
            //获取数据和进行派发 dispatch
            const action = {
                type: NUM_FRUIT_INIT,
                value: res.data.nums
            }
            //开始派发 
            dispatch(action);
        })
    }
}
