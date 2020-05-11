let initialState = {
    FriendsData: [
        {id: "1", name: "Vasya", img: '/img/FriendsData/id1.png'},
        {id: "2", name: "Petya", img: '/img/FriendsData/id2.png'},
        {id: "3", name: "Ilya", img: '/img/FriendsData/id3.png'},
        {id: "4", name: "Lena", img: '/img/FriendsData/id4.jpg'},
        {id: "5", name: "Kostya", img: '/img/FriendsData/id5.jpg'}
    ]
};

const sidebarReducer = (state = initialState, action) => {

    //Создаем случайную сортировку "Друзей". Методика с сайта https://habr.com/ru/post/358094/
    //вспомогательная функция
    function putToCache(elem, cache) {
        if (cache.indexOf(elem) !== -1) {
            return;
        }
        let i = Math.floor(Math.random() * (cache.length + 1));
        cache.splice(i, 0, elem);
    }

    //функция, возвращающая свеженький, девственный компаратор
    function madness() {
        let cache = [];
        return function (a, b) {
            putToCache(a, cache);
            putToCache(b, cache);
            return cache.indexOf(b) - cache.indexOf(a);
        }
    }

    //собственно функция перемешивания
    function shuffle(arr) {
        let compare = madness();
        return arr.sort(compare);
    }
    state.FriendsData = shuffle(state.FriendsData);
     return state;
};

export default sidebarReducer;
