import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const navigate = useNavigate();

    return (
        <div className="create-account-container">
            <h1>Enter a username and password and click 'Create'</h1>
            <div className="create-login">
                <label htmlFor="create-username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter a username"
                />
            </div>

            <div className="create-login">
                <label htmlFor="create-password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter a password"
                />
            </div>
            <button className="create-account-button" onClick={() => navigate('/')}>Create Account</button>
        </div>
    );
}

export default CreateAccount;