import React from 'react';

const UserRow = ({ user, index, refetch }) => {
    const handleMakeAdmin = email => {
        fetch(`http://localhost:5000/admin/user?email=${email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            method: 'PATCH'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                refetch();
            }
        });
    };

    const handleMakeWorker = email => {
        fetch(`http://localhost:5000/worker/user?email=${email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            method: 'PATCH'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                refetch();
            }
        });
    };

    return (
        <tr>
            <th>{index}</th>
            <td>{user?.email}</td>
            <td>
                {
                    user.role ?
                        <div class="badge badge-primary badge-outline w-full">{user?.role === 'admin' ? 'Admin' : 'Worker'}</div>
                        : <>
                            <button
                                onClick={() => handleMakeAdmin(user?.email)}
                                className='btn btn-ghost btn-xs'>Make Admin</button>
                            <button
                                onClick={() => handleMakeWorker(user?.email)}
                                className='btn btn-ghost btn-xs'>Make Worker</button>
                        </>
                }
            </td>
        </tr>
    );
};

export default UserRow;