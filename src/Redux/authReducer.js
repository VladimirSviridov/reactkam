import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.payload.email,
                userId: action.payload.id,
                login: action.payload.login,
                isAuth: action.payload.isAuth,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA, payload: {email, id, login, isAuth}});

export const getAuthData = () => (dispatch) => {
    return authAPI.getMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data;
                dispatch(setAuthUserData(email, id, login, true));
            }
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthData())
            } else{
                let errorMessage = response.data.messages.length?response.data.messages[0]:"Wrong email or password";
                    dispatch(stopSubmit("login", {_error:errorMessage}));
                }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;
