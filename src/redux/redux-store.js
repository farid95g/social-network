import { combineReducers, createStore } from "redux";
import profileReducer from './../redux/profile-reducer';
import messagesReducer from './../redux/messages-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer
});

let store = createStore(reducers);

window.store = store;

export default store;