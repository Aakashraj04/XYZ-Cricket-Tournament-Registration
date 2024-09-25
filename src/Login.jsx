import React, { useState } from 'react';
import './Login.css'; // You can keep your CSS in a separate file or use styled-components.

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="bd">


        <div class="login-container">
            <div class="toggle-btn">
                </div>
            <form id="loginForm" class="form active">
                <h2>Login</h2>
                <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                        <button type="submit" class="submit-btn">Login</button>
                    </form>
                </div>
                </div>

    )};

export default Login;
