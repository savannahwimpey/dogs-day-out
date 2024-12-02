import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <h2>Home</h2>
            <article>
                <p> Welcome to <strong>Dog's Day Out</strong>, your go-to resource for discovering dog friendly spots in your area! Whether you’re searching for a new park, café, or pet-friendly shop, our site makes it easy for dog owners to find and explore the best places to visit with their furry companions. </p>
                <br></br>
                <p> On our <strong>Explore Page</strong>, you can browse user-rated establishments, leave comments, and bookmark your favorites to visit later. If you’re looking for something specific, our <strong>Search Page</strong> lets you check if a location is dog-friendly by name. </p>
                <br></br>
                <p> Create a <strong>profile</strong> to keep track of all your bookmarked places and never miss out on a fun adventure with your dog! Dog's Day Out is all about connecting you and your pup with the best experiences wherever you go.</p>
            </article>
            <button className="search-button" onClick={() => navigate('/search')}>Search</button>
            <article className="search-instructions">
                <p className='search-description'>Search an establishment to determine if they allow pets.</p>
            </article>
        </>
    );
}

export default Home;
