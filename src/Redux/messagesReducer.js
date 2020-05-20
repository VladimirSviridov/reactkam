const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let initialState = {
    UsersToDialog: [
        {id: "1", name: "Vasya", img: '/img/FriendsData/id1.png'},
        {id: "2", name: "Petya", img: '/img/FriendsData/id2.png'},
        {id: "3", name: "Ilya", img: '/img/FriendsData/id3.png'},
        {id: "4", name: "Lena", img: '/img/FriendsData/id4.jpg'},
        {id: "5", name: "Kostya", img: '/img/FriendsData/id5.jpg'}
    ],
    MessagesData: [
        {id: "1", message: "Hello!"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "How do you feel it?"},
        {id: "4", message: "Do you have smth to say?"}
    ],
    NewMessage: 'smth',
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return  {
                ...state,
                NewMessage: '',
                MessagesData: [...state.MessagesData, {id: state.MessagesData.length + 2, message: state.NewMessage,}],
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                NewMessage: action.newText,
            };
        default:
            return state;
    }
};

export const updateNewMessage = (text) =>
    ({type: UPDATE_NEW_MESSAGE, newText: text});
export const addMessage = () => ({type: ADD_MESSAGE});


export default messagesReducer;