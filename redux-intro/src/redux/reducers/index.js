import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
const reducers = combineReducers({
    counterReducer //bunu böyle kullanmak ile counterReducer : counterReducer olarak kullanmak arasında fark yok isimler aynı diye js o isimle bi değişken oluşturuyo zaten
});

export default reducers;