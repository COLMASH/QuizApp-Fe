import userReducer from './userReducer';
import quizReducer from './quizReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    userReducer,
    quizReducer
});

const middlewares = applyMiddleware(thunk);
export const store = createStore(rootReducer, middlewares);

export default store;
