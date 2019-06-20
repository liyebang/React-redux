import { NUM_ADD,NUM_REDUCE } from '../actionTypes'


const defaultState = {
    num: 404
};
export default (state=defaultState,action) => {

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
      
        default:
          break;
      }


    return state;
}