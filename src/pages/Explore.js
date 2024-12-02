import { useNavigate } from 'react-router-dom';

function Explore() {
    const navigate = useNavigate();
    return (
        <>
            <h2>Explore</h2>
            <article>
                <p> On our <strong>Explore Page</strong>, you can browse user-posted establishments, leave comments, and bookmark your favorites to visit later. If you’re looking for something specific, our <strong>Search Page</strong> lets you check if a location is dog-friendly by name.
                </p>
                <br></br>
            </article>

            <button className="place-button" onClick={() => navigate('/establishments')}>Establishment1</button>
            <br></br>
            <button className="place-button" onClick={() => navigate('/establishments')}>Establishment2</button>
            <br></br>
            <button className="place-button" onClick={() => navigate('/establishments')}>Establishment3</button>
        </>
    );
}

export default Explore;
