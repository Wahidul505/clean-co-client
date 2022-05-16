import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAdmin = () => {
    const admin = true;
    const location = useLocation();
    if (!admin) {
        return <Navigate to='/' state={{ from: location }} replace />
    }
    return <Outlet />;
};

export default RequireAdmin;