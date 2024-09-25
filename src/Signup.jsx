import React, { useState } from 'react';
import './Signup.css'; // Include the same styles as CSS

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., API call)
        console.log(formData);
    };

    // Parallax effect for background
    const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth) * 10;
        const y = (event.clientY / window.innerHeight) * 10;
        document.body.style.backgroundPosition = `${x}% ${y}%`;
    };

    return (
        <div className="container" onMouseMove={handleMouseMove}>
            {/* Toggle Switch (for navigation to Login) */}
            <div className="toggle-btn">
                <button id="loginBtn" onClick={() => window.location.href = '/login'}>Login</button>
                <button id="signupBtn" className="active">SignUp</button>
            </div>

            {/* Signup Form */}
            <form id="signupForm" className="form active" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="submit-btn">Sign Up</button>

                {/* Alternative Signup Options */}
                <div className="auth-btn google-btn">
                    <img src="https://loodibee.com/wp-content/uploads/Google-Symbol.png" alt="Google Logo" />
                    Continue with Google
                </div>
                <div className="auth-btn microsoft-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" />
                    Continue with Microsoft
                </div>
            </form>
        </div>
    );
};

export default Signup;
