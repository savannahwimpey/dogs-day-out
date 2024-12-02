import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    return (
        <>
            <h2>Profile</h2>
            <div className="username-container">
                <article>
                    <p> Username
                    </p>
                </article>
            </div >
            <div className="profile-pic">
                <article>
                    <p> profile pic
                    </p>
                </article>
            </div >
            <button className="bookmark-button" onClick={() => navigate('/bookmarks')}>Bookmarks</button>

        </>
    );
}

export default Profile;
