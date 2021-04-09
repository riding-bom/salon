import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import openModal from "./reducers/openModal";
import postsReducer from "./reducers/postsList";

const middleware = [thunk];

const rootReducer = combineReducers({
  postsList: postsReducer,
  openModal: openModal,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
