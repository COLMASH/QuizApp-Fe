import UserProfile from '../../../components/User/UserProfile';
import UserBar from '../../../components/User/UserBar';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getUser } from '../../../store/userReducer';
import ManageQuizzes from '../../../components/Quiz/ManageQuizzes';
import QuizList from '../../../components/Quiz/QuizList';

import './CreateQuizzes.css';

function CreateQuizzes() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div className="mainUser">
            <div className="user-blockNavInfo">
                <div>
                    <UserProfile />
                </div>
                <div>
                    <UserBar />
                </div>
            </div>
            <div style={{ color: 'white' }}>
                <div>
                    <ManageQuizzes />
                    <br />
                    <h3>List of Quizzes</h3>
                    <QuizList />
                </div>
            </div>
        </div>
    );
}

export default CreateQuizzes;
