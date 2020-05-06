let renderEntireTree = () => {
    console.log('smth is changed')
};

let state = {
    ProfilePage: {
        PostsData: [
            {id: "1", img:'/img/iconfinder-7-avatar-2754582_120519.png' ,likesCount: "5", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nisi."},
            {id: "2", img:'/img/iconfinder-7-avatar-2754582_120519.png' ,likesCount: "56", message: "I learning JS React"},
            {id: "3", img:'/img/iconfinder-7-avatar-2754582_120519.png' ,likesCount: "13", message: "And I know how to use props"}
        ],
        NewPostText: 'smth',
    },
    MessagesPage: {
        UsersToDialog: [
            {id: "1", name: "Vasya",  img:'/img/FriendsData/id1.png'},
            {id: "2", name: "Petya",  img:'/img/FriendsData/id2.png'},
            {id: "3", name: "Ilya",  img:'/img/FriendsData/id3.png'},
            {id: "4", name: "Lena",  img:'/img/iconfinder-7-avatar-2754582_120519.png'},
            {id: "5", name: "Kostya",  img:'/img/iconfinder-7-avatar-2754582_120519.png'}
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

};

export const addMessage = () =>{
    let newMessage = {
        id: state.MessagesPage.MessagesData.length+2,
        message: state.MessagesPage.NewMessage,
    };
    state.MessagesPage.MessagesData.push(newMessage);
    state.MessagesPage.NewMessage = '';
    renderEntireTree(state);
};

export const updateNewMessage = (newText) => {
    state.MessagesPage.NewMessage = newText;
    renderEntireTree(state);
};

export const addPost = () =>{
    let newPost = {
        id: state.ProfilePage.PostsData.length+2,
        img:'/img/iconfinder-7-avatar-2754582_120519.png',
        likesCount: "0",
        message: state.ProfilePage.NewPostText,
    };
    state.ProfilePage.PostsData.push(newPost);
    state.ProfilePage.NewPostText = '';
    renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.ProfilePage.NewPostText = newText;
    renderEntireTree(state);
};

export let subscribe = (observer) =>{
  renderEntireTree = observer;
};

export default state;