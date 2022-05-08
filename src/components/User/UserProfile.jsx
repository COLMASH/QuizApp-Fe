import { useSelector } from "react-redux";
import UpdateProfilePic from "./UserProfilePicUpdate";

function ProfileCard() {
  const { user } = useSelector((state) => {
    return {
      user: state.selectUserReducer.user,
    };
  });

  return (
    <div className="user-container">
      <div className="user-main-body">
        <div className="card1">
          <div className="card1-body">
            <div className="d-flex flex-column align-items-center text-center">
              <div className="portrait">
                <img
                  src={user.profilePicture}
                  alt="UserProfile"
                  className="imageProfile rounded-circle"
                  width="150"
                />
              </div>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="homeButton btn btn-primary btn-sm"
              >
                UPDATE
              </button>
              <div className="mt-3">
                <h1 style={{ fontSize: 25 }}>
                  {user.name} {user.lastname}
                </h1>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            </div>
            <UpdateProfilePic />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
