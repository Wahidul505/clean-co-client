import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ml-6">
                <label for="my-drawer" class="btn btn-accent drawer-button">{'>'}</label>
                <div className='flex justify-center ml-6'>
                    <Outlet />
                </div>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard/users'>Users</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;