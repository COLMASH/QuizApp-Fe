import { useSelector, useDispatch } from 'react-redux';
import CreateQuizModal from './CreateQuizModal';
import UpdateQuizModal from './UpdateQuizModal';
import { deleteQuiz } from '../../store/quizReducer';

function ManageQuizzes() {
    const dispatch = useDispatch();

    const { quizToDelete } = useSelector((state) => {
        return {
            quizToDelete: state.quizReducer.quizToDelete
        };
    });

    const handleDelete = () => {
        dispatch(deleteQuiz(quizToDelete));
    };

    return (
        <div>
            <div className="btn-group" role="group">
                <label>
                    <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#createQuizModal"
                        className="homeButton btn btn-primary btn-sm"
                    >
                        NEW QUIZ
                    </button>
                </label>
                <label>
                    <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#UpdateQuizModal"
                        className="homeButton btn btn-primary btn-sm"
                    >
                        EDIT QUIZ
                    </button>
                </label>
                <label>
                    <button type="button" className="homeButton btn btn-primary btn-sm" onClick={handleDelete}>
                        DELETE QUIZ
                    </button>
                </label>
            </div>
            <CreateQuizModal />
            <UpdateQuizModal />
        </div>
    );
}

export default ManageQuizzes;
