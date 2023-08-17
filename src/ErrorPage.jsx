import React from 'react';

const ErrorPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
            <h1>404</h1>
            <p>Page Not Found</p>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>
    );
}

export default ErrorPage;
