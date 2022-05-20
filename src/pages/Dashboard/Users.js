import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user')
        .then(res => res.json()));
    if (isLoading) {
        return <h1 className='text-center text-3xl text-secondary'>Loading...</h1>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => <UserRow
                        key={index}
                        user={user}
                        refetch={refetch}
                    />)}
                </tbody>
            </table>
        </div>
    );
};

export default Users;