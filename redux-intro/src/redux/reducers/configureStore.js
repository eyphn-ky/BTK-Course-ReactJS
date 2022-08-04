import { createStore } from "redux";
import reducers from "./index";


//store'u oluşturduk reducer'larıda indexten aldık
export default function configureStore(){
    return createStore(reducers);
}
