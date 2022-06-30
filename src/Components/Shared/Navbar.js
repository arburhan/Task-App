import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    const navTabs = <>
        <li> <Link to='/'>To Do</Link> </li>
        <li className='md:mx-2'> <Link to='/'>Completed Task</Link> </li>
        <li> <Link to='/'>Calendar</Link> </li>
        {
            !user ? <li> <Link to='/login'>Login</Link> </li> : <li className='md:mx-2'><button onClick={handleSignOut} >Sign Out</button></li>
        }
    </>
    return (
        <nav class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navTabs}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">To Do Task</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navTabs}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;