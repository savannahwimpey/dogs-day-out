import { useNavigate } from 'react-router-dom';

function Bookmarks() {
    const navigate = useNavigate();
    return (
        <>
            <h2>Bookmarks</h2>
            <button className="back-button" onClick={() => navigate('/profile')}>Back</button>
            <article>
                <p> Bookmarks.
                </p>
                <br></br>
            </article>
        </>
    );
}

export default Bookmarks;
