import request from "axios";

export const apiLogin = function (User) {
    return request.post('/user/login', User)
}