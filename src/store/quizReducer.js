import { quizCreate, getQuizList, quizUpdate, quizDelete } from './services/quizServices';
import Swal from 'sweetalert2';

export const GET_QUIZ = 'GET_QUIZ';
export const GET_QUIZ_LIST = 'GET_QUIZ_LIST';
export const CREATE_NEW_QUIZ = 'CREATE_NEW_QUIZ';
export const UPDATE_QUIZ = 'UPDATE_QUIZ';
export const REMOVE_QUIZ_DELETED = 'REMOVE_QUIZ_DELETED';
export const ASSIGN_QUIZ_TO_DELETE = 'ASSIGN_QUIZ_TO_DELETE';
export const ASSIGN_QUIZ_TO_UPDATE = 'ASSIGN_QUIZ_TO_UPDATE';
export const CLEAR_QUIZ_TO_UPDATE = 'CLEAR_QUIZ_TO_UPDATE';
export const CLEAR_QUIZ_TO_DELETE = 'CLEAR_QUIZ_TO_DELETE';

const initialState = {
    quiz: {},
    quizList: {},
    quizToDelete: '',
    quizToUpdate: ''
};

export function getAllQuiz() {
    return async function (dispatch) {
        try {
            const { data } = await getQuizList();
            dispatch({
                type: GET_QUIZ_LIST,
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export function updateQuiz(quizId, name, questions) {
    return async function (dispatch) {
        try {
            const authorizationToken = localStorage.getItem('substkn');
            const { data: dataUpdate } = await quizUpdate(authorizationToken, quizId, name, questions);
            dispatch({
                type: UPDATE_QUIZ,
                payload: dataUpdate
            });
            Swal.fire({
                title: 'Confirmation',
                icon: 'success',
                text: `Quiz has been updated successfully! 💾`,
                button: 'OK'
            });
        } catch (error) {
            Swal.fire({
                title: 'Oops...',
                icon: 'error',
                text: 'Something went wrong',
                button: 'OK'
            });
            console.log(error.message);
        }
    };
}

export function createNewQuiz(name, questions) {
    return async function (dispatch) {
        try {
            const authorizationToken = localStorage.getItem('substkn');
            const { data } = await quizCreate(authorizationToken, name, questions);
            dispatch({
                type: CREATE_NEW_QUIZ,
                payload: data
            });
            Swal.fire({
                title: 'Confirmation',
                icon: 'success',
                text: `Quiz '${name}' has been successfully created!`,
                button: 'OK'
            });
        } catch (error) {
            Swal.fire({
                title: 'Oops...',
                icon: 'error',
                text: 'Something went wrong',
                button: 'OK'
            });
            console.log(error.message);
        }
    };
}

export function assignQuizToUpdate(id) {
    return async function (dispatch) {
        try {
            dispatch({
                type: ASSIGN_QUIZ_TO_UPDATE,
                payload: id
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export function assignQuizToDelete(id) {
    return async function (dispatch) {
        try {
            dispatch({
                type: ASSIGN_QUIZ_TO_DELETE,
                payload: id
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export function deleteQuiz(quizToDelete) {
    return async function (dispatch) {
        try {
            const { data } = await quizDelete(quizToDelete);
            dispatch({
                type: REMOVE_QUIZ_DELETED,
                payload: data
            });
            Swal.fire({
                title: 'Confirmation',
                icon: 'success',
                text: `Quiz has been successfully removed! 🗑`,
                button: 'OK'
            });
        } catch (error) {
            Swal.fire({
                title: 'Oops...',
                icon: 'error',
                text: 'Something went wrong',
                button: 'OK'
            });
            console.log(error.message);
        }
    };
}

export function clearQuizToUpdate() {
    return async function (dispatch) {
        try {
            dispatch({
                type: CLEAR_QUIZ_TO_UPDATE,
                payload: ''
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export function clearQuizToDelete() {
    return async function (dispatch) {
        try {
            dispatch({
                type: CLEAR_QUIZ_TO_DELETE,
                payload: ''
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_QUIZ_LIST: {
            return {
                ...state,
                quizList: action.payload
            };
        }
        case CREATE_NEW_QUIZ: {
            return {
                ...state,
                quiz: action.payload
            };
        }
        case UPDATE_QUIZ: {
            return {
                ...state,
                quiz: action.payload
            };
        }
        case ASSIGN_QUIZ_TO_DELETE: {
            return {
                ...state,
                quizToDelete: action.payload
            };
        }
        case ASSIGN_QUIZ_TO_UPDATE: {
            return {
                ...state,
                quizToUpdate: action.payload
            };
        }
        case CLEAR_QUIZ_TO_UPDATE: {
            return {
                ...state,
                quizToUpdate: action.payload
            };
        }
        case CLEAR_QUIZ_TO_DELETE: {
            return {
                ...state,
                quizToDelete: action.payload
            };
        }
        case REMOVE_QUIZ_DELETED: {
            return {
                ...state,
                quiz: state.quiz.filter((quiz) => quiz._id !== action.payload._id)
            };
        }
        default: {
            return state;
        }
    }
}

export default reducer;
