import axios from 'axios';

export async function getQuizList() {
    return await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/quiz/quizList'
    });
}

export async function quizCreate(token, name, questions) {
    return await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/quiz/quizCreate',
        data: {
            name,
            questions
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export async function quizUpdate(quizId, name, questions) {
    return await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/quiz/quizUpdate',
        data: {
            quizId,
            name,
            questions
        }
    });
}

export async function quizDelete(quizId) {
    return await axios({
        method: 'DELETE',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/quiz/quizDelete',
        data: { quizId }
    });
}
