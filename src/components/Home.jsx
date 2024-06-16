import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import { auth } from './firebase'; // Import your Firebase authentication instance

function Home() {
    const navigate = useNavigate(); // React Router's useNavigate hook
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Firebase listener to update currentUser when authentication state changes
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user);   // currentUser = user
            } else {
                setCurrentUser(null); // No user is signed in
                navigate('/login'); // Navigate to '/login' if not logged in
            }
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await auth.signOut(); // Use Firebase's signOut method to log the user out
            console.log('User logged out successfully');
            navigate('/login'); // Navigate to '/login' after logout
        } catch (error) {
            console.error('Error logging out:', error.message);
            // Handle error if logout fails
        }
    };

    if (!currentUser) {
        // If currentUser is null, show loading or redirect to login (though it should redirect before reaching here)
        return <div>Loading...</div>; // Example of showing a loading state
    }

    return (
        <div>
            <h1>Welcome, {currentUser.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
