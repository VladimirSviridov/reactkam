import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "376bec7d-2356-4244-9ba0-4bac3609f938"
    }
});

export const usersAPI = {
    getUsers(currentPage= 1, pageSize = 3)  {
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
};
