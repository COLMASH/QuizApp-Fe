import { Link, useHistory } from 'react-router-dom';

function UserBar() {
    const history = useHistory();

    function validateToken(link) {
        const token = localStorage.getItem('substkn');
        return token ? link : '/';
    }

    function Logout() {
        localStorage.removeItem('substkn');
        history.push('/');
    }
    return (
        <nav>
            <div className="userNavContainer d-grid gap-3">
                <Link to={() => validateToken('/MainUser')} className="userLinkButton btn btn-primary link">
                    <strong>PROFILE</strong>
                </Link>

                <Link to={() => validateToken('/CreateQuizzes')} className="userLinkButton btn btn-primary link">
                    <strong>CREATE QUIZZES</strong>
                </Link>
                <Link to={() => validateToken('/PlayQuizzes')} className="userLinkButton btn btn-primary link">
                    <strong>PLAY QUIZZES</strong>
                </Link>
                <Link to={() => validateToken('/ListQuizzes')} className="userLinkButton btn btn-primary link">
                    <strong>LIST OF QUIZZES</strong>
                </Link>
                <button type="button" onClick={Logout} className="userButton btn btn-primary">
                    <strong>LOG OUT</strong>
                </button>
            </div>
        </nav>
    );
}

export default UserBar;
