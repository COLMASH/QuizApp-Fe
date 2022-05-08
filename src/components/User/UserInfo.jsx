import { useSelector } from 'react-redux';
import UserInformationUpdate from './UserInformationUpdate';

function UserInfo() {
    const { user } = useSelector((state) => {
        return {
            user: state.selectUserReducer.user
        };
    });
    return (
        <div className="user-container">
            <div className="user-main-body">
                <div className="userCard card2">
                    <div className="card2-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <h2 className="mb-0">Full Name</h2>
                            </div>
                            <div className="col-sm-9">
                                {user.name} {user.lastName}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h2 className="mb-0">Email</h2>
                            </div>
                            <div className="col-sm-9">{user.email}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-12">
                                <button
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#userUpdateModal"
                                    className="homeButton btn btn-primary btn-sm"
                                >
                                    <strong>EDIT</strong>
                                </button>
                            </div>
                            <UserInformationUpdate />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
