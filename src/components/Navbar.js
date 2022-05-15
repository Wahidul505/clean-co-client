import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItems =
        <>
            <li><NavLink className='rounded-lg' to='/'>Home</NavLink></li>
            <li><NavLink className='rounded-lg' to='/about'>About</NavLink></li>
            <li><NavLink className='rounded-lg' to='/service'>Service</NavLink></li>
            <li><NavLink className='rounded-lg' to='/contact'>Contact</NavLink></li>
            <li><NavLink className='rounded-lg' to='/login'>Login</NavLink></li>
            <li><button className='btn btn-outline btn-primary rounded-lg uppercase text-sm'>Book now</button></li>
        </>
    return (
        <div className='px-12'>
            <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar bg-base-100">
                    <div class="flex-1 px-2 mx-2 text-xl font-semibold">Clean Co.</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-3">
                            {/* <!-- Navbar menu content here --> */}
                            { menuItems}
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                Content
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 gap-3">
                    {/* <!-- Sidebar content here --> */}
                    {menuItems}
                </ul>

            </div>
        </div>
        </div>
    );
};

export default Navbar;