import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

const updateNewText = 'UPDATE-NEW-TEXT';
const addMessage = "ADD-MESSAGE";
const updateNewMessage = 'UPDATE-NEW-MESSAGE';
const addPost = "ADD-POST";

let store = {
    _state: {
        ProfilePage: {
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
        },
        MessagesPage: {
            UsersToDialog: [
                {id: "1", name: "Vasya", img: '/img/FriendsData/id1.png'},
                {id: "2", name: "Petya", img: '/img/FriendsData/id2.png'},
                {id: "3", name: "Ilya", img: '/img/FriendsData/id3.png'},
                {id: "4", name: "Lena", img: '/img/iconfinder-7-avatar-2754582_120519.png'},
                {id: "5", name: "Kostya", img: '/img/iconfinder-7-avatar-2754582_120519.png'}
            ],
            MessagesData: [
                {id: "1", message: "Hello!"},
                {id: "2", message: "How are you?"},
                {id: "3", message: "How do you feel it?"},
                {id: "4", message: "Do you have smth to say?"}
            ],
            NewMessage: 'smth',
        },
        sidebar: {
            FriendsData: [
                {id: "1", name: "Vasya", img: '/img/FriendsData/id1.png'},
                {id: "2", name: "Petya", img: '/img/FriendsData/id2.png'},
                {id: "3", name: "Ilya", img: '/img/FriendsData/id3.png'},
            ]
        },

    },
    _callSubscriber() {
        console.log('smth is changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer (this._state.ProfilePage, action);
        this._state.MessagesPage = messagesReducer(this._state.MessagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
};

export default store;
window.store = store;