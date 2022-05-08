import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assignQuizToDelete, assignQuizToUpdate, getAllQuiz } from '../../store/quizReducer';

function QuizList() {
    const [checkedValue, setIsChecked] = useState('');
    const dispatch = useDispatch();
    console.log(checkedValue);

    const handleSelect = (id) => {
        setIsChecked(id);
        dispatch(assignQuizToDelete(id));
        dispatch(assignQuizToUpdate(id));
    };

    const { quizList } = useSelector((state) => {
        return {
            quizList: state.quizReducer.quizList
        };
    });

    useEffect(() => {
        dispatch(getAllQuiz());
    }, [dispatch]);

    const renderQuizTable = () => {
        return (
            !!quizList &&
            quizList.length > 0 &&
            quizList.map((quiz) => (
                <tr key={quiz._id}>
                    <th>
                        <input
                            type="radio"
                            id={quiz._id}
                            name="quizToSelect"
                            value={quiz._id}
                            onChange={(e) => handleSelect(e.target.value)}
                        />
                    </th>
                    <td style={{ color: 'white', width: '775px' }}>{quiz.name}</td>
                </tr>
            ))
        );
    };

    return (
        <table className="table">
            <thead>
                <tr style={{ color: 'white' }}>
                    <th>SELECT</th>
                    <th>NAME</th>
                </tr>
            </thead>
            <tbody>{renderQuizTable()}</tbody>
        </table>
    );
}

export default QuizList;
