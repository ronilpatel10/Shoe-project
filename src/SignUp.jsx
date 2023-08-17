// SignUp.jsx
import React, { useState } from 'react';

function SignUp({ onSuccessfulSignUp, setSignedUpUser }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., make an API call to register the user.
        console.log('User Data:', formData);

        // Assuming sign-up is successful:
        setSignedUpUser(formData.username); // Set the signed-up user's username
        onSuccessfulSignUp(); // Call the function to close the modal
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={formData.username}
                    onChange={handleChange} 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}     
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange} 
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
