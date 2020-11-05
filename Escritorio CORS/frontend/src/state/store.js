import { applyMiddleware, combineReducers, createStore } from "redux";
import listaConosReducer from "./reducers/listaConosReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = combineReducers({
  centrales: listaConosReducer,
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default store;
