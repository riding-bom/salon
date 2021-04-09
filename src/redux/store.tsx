import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(...middleware));

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
