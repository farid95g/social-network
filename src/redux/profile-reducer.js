import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const UPDATE_USER_STATUS = "UPDATE-USER-STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Hello. How are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Bla bla", likesCount: 54 },
    { id: 4, message: "Ok, anyway", likesCount: 6 }
  ],
  newPostText: '',
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: state.posts.length + 1, message: state.newPostText, likesCount: 0 }
        ],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    case UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => (
  { type: UPDATE_NEW_POST_TEXT, newText: text }
);

export const setUserProfile = (profile) => (
  { type: SET_USER_PROFILE, profile }
)

export const setUserStatus = (status) => (
  { type: SET_USER_STATUS, status }
)

export const updateUserStatus = (status) => (
  { type: UPDATE_USER_STATUS, status }
)

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then((response) => {
      dispatch(setUserProfile(response.data));
    });;
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then((response) => {
      dispatch(setUserStatus(response.data));
    });;
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then((response) => {
      if (response.resultCode === 0) {
        dispatch(updateUserStatus(status));
      }
    });;
}

export default profileReducer;