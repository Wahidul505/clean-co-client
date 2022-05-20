import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user] = useAuthState(auth);
    const [isAdmin, isLoading] = useAdmin(user);
    if (isLoading) {
        return <h1 className='text-center text-3xl text-secondary'>Loading...</h1>
    }
    if (isAdmin) {
        return children;
    }
};

export default RequireAdmin;