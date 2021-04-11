import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import openModal from './reducers/openModal';
import postsReducer from './reducers/postsList';
import { salonInfoReducer } from './reducers/salonInfo';

const middleware = [thunk];

const rootReducer = combineReducers({
  postsList: postsReducer,
  isOpenModal: openModal,
  salonInfo: salonInfoReducer
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
