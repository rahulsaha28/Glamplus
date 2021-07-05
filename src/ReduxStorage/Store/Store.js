import { createStore } from "redux";
import { rootReducer } from "../Reducer";

// this is the main storage
const store = createStore(rootReducer);

export default store;