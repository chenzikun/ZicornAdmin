import request from "axios";

export const apiGetUsers = function () {
    return request.get('/users')
}