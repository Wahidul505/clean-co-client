import { useEffect, useState } from 'react';
const useAdmin = user => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }).then(res => res.json()).then(data => {
                setIsAdmin(data.admin)
                setIsLoading(false);
            });
        }
    }, [user]);

    return [isAdmin, isLoading];
};

export default useAdmin;