import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "376bec7d-2356-4244-9ba0-4bac3609f938"
    }
});

export const usersAPI = {
    getUsers(currentPage= 1, pageSize = 9)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unFollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    follow (id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    getProfile(userId) {
        console.warn("Obsolete method. Please use profileAPI object");
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`,{ status: status } )
    }
};

export const authAPI = {
    getMe () {
        return instance.get(`auth/me`);
    },
    login (email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout (){
        return instance.delete(`auth/login`);
    }
};
