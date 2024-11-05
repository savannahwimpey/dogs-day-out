import React, { useState } from 'react';

function Search() {
    // State to track if the results should be displayed
    const [showResults, setShowResults] = useState(false);

    // Function to handle the "Go" button click
    const handleSearchClick = () => {
        setShowResults(true);
    };

    return (
        <>
            <h2>Search</h2>
            <p>
                Wondering if a place is dog friendly? Enter the name of the establishment to find out.
            </p>
            <div className="search-container">
                <input
                    type="text"
                    id="search-box"
                    placeholder="Search"
                />
                <button className="go-button" onClick={handleSearchClick}>Go</button>
            </div>

            {/* Conditionally render the results box */}
            {showResults && (
                <div className="results-box">
                    <p>
                        <strong>Results:</strong> Not Found. Call or visit this place to discover if they are dog friendly. If they welcome pets, post it for others to enjoy!
                    </p>
                </div>
            )}
        </>
    );
}

export default Search;
