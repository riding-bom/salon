import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/postsList";
import {newPostReducer} from "./reducers/newPost"

const middleware = [thunk];

const rootReducer = combineReducers({
  postsList: postsReducer,
  newPost: newPostReducer
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
