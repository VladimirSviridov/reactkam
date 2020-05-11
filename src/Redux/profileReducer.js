const updateNewText = 'UPDATE-NEW-TEXT';
const addPost = "ADD-POST";

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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
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
        case updateNewText:
            return {
                ...state,
                NewPostText: action.newText,
            };
        default:
            return state;
    }
};

export const updateNewTextActionCreator = (text) =>
    ({type: updateNewText, newText: text});
export const addPostActionCreator = () => ({type: addPost});


export default profileReducer;