import axios from 'axios';

export async function getUserList() {
    return await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/user/userList'
    });
}

export async function userSignIn(email, password) {
    return await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/user/signin',
        data: {
            email,
            password
        }
    });
}

export async function getUserInfo(token) {
    return await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/user/userInfo',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export async function updateUserProfilePic(token, data) {
    return await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/user/userProfilePic',
        data,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
}

export async function userRegister(name, lastName, email, password) {
    return await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/user/signup',
        data: {
            name,
            lastName,
            email,
            password
        }
    });
}

export async function userUpdate(token, name, lastName) {
    return await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/user/userUpdate',
        data: {
            name,
            lastName
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
