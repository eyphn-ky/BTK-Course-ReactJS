import * as actionTypes from "../actions/actionTypes";
//reducer aldığı action parametresi ile hangi actiona gidip ne iş yapacağına karar verir
//reducer içerisinde state yönetimi yapılır sadece. DB veya API'ye bağlanılmaz
const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;//hiçbiri değilse state değişmemiştir aynen dön 
  }
};

//javascript Immutability


export default counterReducer;