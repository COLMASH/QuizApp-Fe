import React from 'react';
import CreateQuizModal from './CreateQuizModal';

function CreateQuiz() {
    return (
        <div>
            <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#createQuizModal"
                className="homeButton btn btn-primary btn-sm"
            >
                Create Quiz
            </button>
            <CreateQuizModal />
        </div>
    );
}

export default CreateQuiz;
