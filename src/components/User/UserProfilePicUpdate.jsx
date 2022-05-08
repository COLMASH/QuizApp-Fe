import React, { useState } from 'react';
import { updateProfilePic } from '../../store/userReducer';
import { useDispatch } from 'react-redux';

function UpdateProfilePic() {
    const dispatch = useDispatch();

    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);

    function selectImage(e) {
        setFile(e.target.files[0]);
        generatePreview(e.target.files[0]);
    }

    function generatePreview(file) {
        const result = URL.createObjectURL(file);
        setImage(result);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateProfilePic(file));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel" style={{ color: 'black' }}>
                                    Update Profile Picture 📸
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-dialog modal-dialog-scrollable"></div>
                            <input
                                type="file"
                                id="file"
                                onChange={selectImage}
                                accept="image/*"
                                style={{ color: 'black' }}
                                className="admins-BTmodal"
                            />
                            {image && <img src={image} alt="preview" />}
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="homeButton btn btn-primary btn-sm"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button className="homeButton btn btn-primary btn-sm" onClick={(e) => setImage(null)}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UpdateProfilePic;
