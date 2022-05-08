import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserRegistrationModal from '../User/UserRegistrationModal';
import logo from '../../assets/logo.png';
import { accessUser } from '../../store/userReducer';

function FormInit() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        dispatch(accessUser(email, password, history));
    };

    return (
        <div>
            <div className="form-gen">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSignIn();
                    }}
                >
                    <div className="app-logo">
                        <img className="quiz-logo" src={logo} alt="quiz logo" />
                    </div>

                    <div className="form-group">
                        <div className="formItem">
                            <label htmlFor="email">
                                <strong> Email: </strong>
                            </label>
                            <input
                                autoFocus
                                id="email"
                                type="text"
                                name="email"
                                placeholder="example@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="form-control"
                            />
                        </div>
                        <div className="formItem">
                            <label htmlFor="password">
                                <strong>Password: </strong>
                            </label>
                            <input
                                id="password"
                                type="password"
                                disabled={email === ''}
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="homeButton-container bttn">
                        <button className="homeButton btn btn-primary btn-sm" type="submit" disabled={password === ''}>
                            Sign In
                        </button>
                        <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            className="homeButton btn btn-primary btn-sm"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <UserRegistrationModal />
        </div>
    );
}

export default FormInit;
