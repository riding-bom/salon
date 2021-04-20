import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import currentUserReducer from "./reducers/currentUser";
import {postsReducer} from "./reducers/postsList";
import { newPostReducer } from "./reducers/newPost";
import { salonInfoReducer } from "./reducers/salonInfo";
import openModal from "./reducers/openModal";
import renderListReducer from "./reducers/renderingList";

const middleware = [thunk];

const rootReducer = combineReducers({
  postsList: postsReducer,
  newPost: newPostReducer,
  isOpenModal: openModal,
  salonInfo: salonInfoReducer,
  currentUser: currentUserReducer,
  renderingList: renderListReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
