import { useNavigate } from 'react-router-dom';

function Establishments() {
    const navigate = useNavigate();
    return (
        <>
            <h2>Establishments</h2>
            <button className="back-button" onClick={() => navigate('/explore')}>Back</button>
            <article>
                <p> place name.
                </p>
                <br></br>
            </article>
        </>
    );
}

export default Establishments;
