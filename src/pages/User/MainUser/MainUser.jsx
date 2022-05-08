import UserProfile from '../../../components/User/UserProfile';
import UserInfo from '../../../components/User/UserInfo';
import UserBar from '../../../components/User/UserBar';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getUser } from '../../../store/userReducer';

import './MainUser.css';

function MainUser() {
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
            <div className="user-blockInfo">
                <div>
                    <UserInfo />
                </div>
            </div>
        </div>
    );
}

export default MainUser;
