import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className="login-container">
                    <h1>Welcome to Dog's Day Out!</h1>
                    <p>Please login or create an account</p>

                    <div className="login">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="login">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button className="login-button" onClick={() => navigate('/')}>Login</button>

                    <p className="create-account">
                        Don't have an account? <a href="/createAccount">Create Account</a>
                    </p>
                </div>
            </header>
        </>
    );
}

export default Login;
