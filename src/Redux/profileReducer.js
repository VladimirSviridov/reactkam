import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    PostsData: [
        {
            id: "1",
            img: '/img/iconfinder-7-avatar-2754582_120519.png',
            likesCount: "5",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nisi."
        },
        {
            id: "2",
            img: '/img/iconfinder-7-avatar-2754582_120519.png',
            likesCount: "56",
            message: "I learning JS React"
        },
        {
            id: "3",
            img: '/img/iconfinder-7-avatar-2754582_120519.png',
            likesCount: "13",
            message: "And I know how to use props"
        }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.PostsData.length + 2,
                img: '/img/iconfinder-7-avatar-2754582_120519.png',
                likesCount: "0",
                message: action.newPostText,
            };
            return {
                ...state,
                NewPostText: '',
                PostsData: [...state.PostsData, newPost],
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
};
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            });
    }
};
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            });
    }
};


export default profileReducer;