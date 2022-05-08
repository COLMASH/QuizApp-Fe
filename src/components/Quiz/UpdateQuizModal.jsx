import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewQuiz } from '../../store/quizReducer';

function UpdateQuizModal() {
    const [questions, setQuestions] = useState([]);
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');
    const [answer7, setAnswer7] = useState('');
    const [answer8, setAnswer8] = useState('');
    const [answer9, setAnswer9] = useState('');
    const [answer10, setAnswer10] = useState('');
    const [isCorrect, setIsCorrect] = useState('');
    const dispatch = useDispatch();

    const handleCancel = () => {
        setAnswer1('');
        setAnswer2('');
        setAnswer3('');
        setAnswer4('');
        setAnswer5('');
        setAnswer6('');
        setAnswer7('');
        setAnswer8('');
        setAnswer9('');
        setAnswer10('');
        setName('');
        setQuestions([]);
        setQuestion('');
        setIsCorrect('');
    };

    const handleCreateNewQuiz = () => {
        dispatch(createNewQuiz(name, questions));
        setAnswer1('');
        setAnswer2('');
        setAnswer3('');
        setAnswer4('');
        setAnswer5('');
        setAnswer6('');
        setAnswer7('');
        setAnswer8('');
        setAnswer9('');
        setAnswer10('');
        setName('');
        setQuestions([]);
        setQuestion('');
        setIsCorrect('');
    };

    const handleSelect = (id) => {
        setIsCorrect(id);
        console.log(id);
    };

    const handleAddQuestion = (
        questionName,
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
        answer7,
        answer8,
        answer9,
        answer10,
        isCorrect
    ) => {
        const answersPreFilter = [
            answer1,
            answer2,
            answer3,
            answer4,
            answer5,
            answer6,
            answer7,
            answer8,
            answer9,
            answer10
        ];

        const answers = answersPreFilter.filter((el) => el !== '');

        const questionBody = {
            answers,
            correctAnswer: isCorrect,
            questionName
        };
        setQuestions((questions) => [...questions, questionBody]);
        setAnswer1('');
        setAnswer2('');
        setAnswer3('');
        setAnswer4('');
        setAnswer5('');
        setAnswer6('');
        setAnswer7('');
        setAnswer8('');
        setAnswer9('');
        setAnswer10('');
        setIsCorrect('');
        console.log(questions);
        console.log(questions.length);
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleCreateNewQuiz();
            }}
        >
            <div
                className="modal fade"
                id="UpdateQuizModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 style={{ color: 'black' }} className="modal-title" id="staticBackdropLabel">
                                Create Quiz Form ✍
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <label style={{ color: 'black' }} htmlFor="First-Name">
                                <strong> *Quiz Name: </strong>
                            </label>
                            <input
                                autoFocus
                                id="Quiz-Name"
                                type="text"
                                name="Quiz-Name"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <label style={{ color: 'black' }} htmlFor="Question">
                                <strong> *Question: </strong>
                            </label>
                            <input
                                autoFocus
                                id="Question"
                                type="text"
                                name="Question"
                                className="form-control"
                                onChange={(e) => setQuestion(e.target.value)}
                                value={question}
                            />
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Is Correct?</th>
                                        <th>Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-1"
                                                name="isCorrect"
                                                value="Answer-1"
                                                onChange={(e) => handleSelect(answer1)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-1">
                                                <strong> *Answer 1: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-1"
                                                type="text"
                                                name="Answer-1"
                                                className="form-control"
                                                onChange={(e) => setAnswer1(e.target.value)}
                                                value={answer1}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-2"
                                                name="isCorrect"
                                                value="Answer-2"
                                                onChange={(e) => handleSelect(answer2)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-2">
                                                <strong> *Answer 2: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-2"
                                                type="text"
                                                name="Answer-2"
                                                className="form-control"
                                                onChange={(e) => setAnswer2(e.target.value)}
                                                value={answer2}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-3"
                                                name="isCorrect"
                                                value="Answer-3"
                                                onChange={(e) => handleSelect(answer3)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-3">
                                                <strong> Answer 3: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-3"
                                                type="text"
                                                name="Answer-3"
                                                className="form-control"
                                                onChange={(e) => setAnswer3(e.target.value)}
                                                value={answer3}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-4"
                                                name="isCorrect"
                                                value="Answer-4"
                                                onChange={(e) => handleSelect(answer4)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-4">
                                                <strong> Answer 4: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-4"
                                                type="text"
                                                name="Answer-4"
                                                className="form-control"
                                                onChange={(e) => setAnswer4(e.target.value)}
                                                value={answer4}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-5"
                                                name="isCorrect"
                                                value="Answer-5"
                                                onChange={(e) => handleSelect(answer5)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-5">
                                                <strong> Answer 5: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-5"
                                                type="text"
                                                name="Answer-5"
                                                className="form-control"
                                                onChange={(e) => setAnswer5(e.target.value)}
                                                value={answer5}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-6"
                                                name="isCorrect"
                                                value="Answer-6"
                                                onChange={(e) => handleSelect(answer6)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-6">
                                                <strong> Answer 6: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-6"
                                                type="text"
                                                name="Answer-6"
                                                className="form-control"
                                                onChange={(e) => setAnswer6(e.target.value)}
                                                value={answer6}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-7"
                                                name="isCorrect"
                                                value="Answer-7"
                                                onChange={(e) => handleSelect(answer7)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-7">
                                                <strong> Answer 7: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-7"
                                                type="text"
                                                name="Answer-7"
                                                className="form-control"
                                                onChange={(e) => setAnswer7(e.target.value)}
                                                value={answer7}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-8"
                                                name="isCorrect"
                                                value="Answer-8"
                                                onChange={(e) => handleSelect(answer8)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-8">
                                                <strong> Answer 8: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-8"
                                                type="text"
                                                name="Answer-8"
                                                className="form-control"
                                                onChange={(e) => setAnswer8(e.target.value)}
                                                value={answer8}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-9"
                                                name="isCorrect"
                                                value="Answer-9"
                                                onChange={(e) => handleSelect(answer9)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-9">
                                                <strong> Answer 9: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-9"
                                                type="text"
                                                name="Answer-9"
                                                className="form-control"
                                                onChange={(e) => setAnswer9(e.target.value)}
                                                value={answer9}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="radio"
                                                id="Answer-10"
                                                name="isCorrect"
                                                value="Answer-10"
                                                onChange={(e) => handleSelect(answer10)}
                                            />
                                        </th>
                                        <td>
                                            <label htmlFor="Answer-10">
                                                <strong> Answer 10: </strong>
                                            </label>
                                            <input
                                                autoFocus
                                                id="Answer-10"
                                                type="text"
                                                name="Answer-10"
                                                className="form-control"
                                                onChange={(e) => setAnswer10(e.target.value)}
                                                value={answer10}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={handleCancel}
                                type="button"
                                className="homeButton btn btn-primary btn-sm"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() =>
                                    handleAddQuestion(
                                        question,
                                        answer1,
                                        answer2,
                                        answer3,
                                        answer4,
                                        answer5,
                                        answer6,
                                        answer7,
                                        answer8,
                                        answer9,
                                        answer10,
                                        isCorrect
                                    )
                                }
                                type="button"
                                disabled={
                                    answer1 === '' ||
                                    answer2 === '' ||
                                    isCorrect === '' ||
                                    name === '' ||
                                    question === ''
                                }
                                className="homeButton btn btn-primary btn-sm"
                            >
                                Add Question
                            </button>
                            <button
                                type="submit"
                                disabled={questions.length === 0}
                                className="homeButton btn btn-primary btn-sm"
                            >
                                Update Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default UpdateQuizModal;
