const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
    NewPostText: 'smth',
    profile: null /*{
        photos: {
            small:'../img/defaultUserPhoto.png'
        }
    }*/
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.PostsData.length + 2,
                img: '/img/iconfinder-7-avatar-2754582_120519.png',
                likesCount: "0",
                message: state.NewPostText,
            };
            return {
                ...state,
                NewPostText: '',
                PostsData: [...state.PostsData, newPost],
            };
        case UPDATE_NEW_TEXT:
            return {
                ...state,
                NewPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
};

export const updateNewText = (text) =>
    ({type: UPDATE_NEW_TEXT, newText: text});
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export default profileReducer;