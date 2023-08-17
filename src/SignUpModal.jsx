import React from 'react';
import SignUp from './SignUp';

function SignUpModal({ isOpen, onClose, onSuccessfulSignUp, setSignedUpUser }) {
    if (!isOpen) return null;

    const modalContainerStyle = {
        position: 'fixed',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '400px',
        backgroundColor: '#FFFFFF', // Pristine white background
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)', // Subtle shadow for depth
        zIndex: 1000,
        fontFamily: 'Roboto, sans-serif', // Using Roboto font
        color: '#333' // Dark text for contrast against white
    };

    const closeButtonStyle = {
        padding: '10px 20px',
        border: '1px solid #ffbb66', // Border color matching the logo's hue
        borderRadius: '5px',
        backgroundColor: 'transparent', // Transparent background to let modal color shine
        color: '#ffbb66', // Button text color matching logo's hue
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.2s ease, color 0.3s ease',
        float: 'right',
        fontWeight: '600', 
        fontSize: '16px'
    };

    // Hover state changes for the button
    const closeButtonHoverStyle = {
        backgroundColor: '#ffbb66', 
        color: '#FFFFFF' // White text on hover
    };

    return (
        <div style={modalContainerStyle}>
            <SignUp onSuccessfulSignUp={onSuccessfulSignUp} setSignedUpUser={setSignedUpUser} />
            <button 
                style={closeButtonStyle} 
                onMouseOver={e => e.target.style = closeButtonHoverStyle}
                onMouseOut={e => e.target.style = closeButtonStyle}
                onClick={onClose}
            >
                Close
            </button>
        </div>
    );
}

export default SignUpModal;
