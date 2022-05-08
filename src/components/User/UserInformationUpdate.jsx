import { updateUserProfileInfo } from '../../store/userReducer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function UserInformationUpdate() {
    const dispatch = useDispatch();
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');

    const handleUpdate = () => {
        dispatch(updateUserProfileInfo(FirstName, LastName));
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
            }}
        >
            <div
                className="modal fade"
                id="userUpdateModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel" style={{ color: 'black' }}>
                                Personal Information Update 📝
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="First-Name" style={{ color: 'black' }}>
                                <strong> First Name: </strong>
                            </label>
                            <input
                                autoFocus
                                id="First-Name"
                                type="text"
                                name="First-Name"
                                className="form-control"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={FirstName}
                            />
                            <label htmlFor="Last-Name" style={{ color: 'black' }}>
                                <strong> Last Name: </strong>
                            </label>
                            <input
                                id="Last-Name"
                                type="text"
                                name="Last-Name"
                                className="form-control"
                                onChange={(e) => setLastName(e.target.value)}
                                value={LastName}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="homeButton btn btn-primary btn-sm" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={FirstName === '' && LastName === ''}
                                className="homeButton btn btn-primary btn-sm"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default UserInformationUpdate;
