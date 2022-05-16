import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
    const user = true;
    const location = useLocation();
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return <Outlet />;
};

export default RequireAuth;