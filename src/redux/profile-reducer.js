import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const UPDATE_USER_STATUS = "UPDATE-USER-STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
  posts: [
    { id: 1, message: "Hello. How are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Bla bla", likesCount: 54 },
    { id: 4, message: "Ok, anyway", likesCount: 6 }
  ],
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
          { id: state.posts.length + 1, message: action.newPostText, likesCount: 0 }
        ]
      }
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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => (
  { type: SET_USER_PROFILE, profile }
)

export const setUserStatus = (status) => (
  { type: SET_USER_STATUS, status }
)

export const updateUserStatus = (status) => (
  { type: UPDATE_USER_STATUS, status }
)

export const deletePost = (postId) => (
  { type: DELETE_POST, postId }
)

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  
  dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  
  if (response.data.resultCode === 0) {
    dispatch(updateUserStatus(status));
  }
}

export default profileReducer;