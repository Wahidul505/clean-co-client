import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const RequireAuth = () => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <h1 className='text-center text-3xl text-secondary'>Loading...</h1>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return <Outlet />;
};

export default RequireAuth;