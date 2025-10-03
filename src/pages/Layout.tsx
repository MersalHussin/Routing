import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
        <NavBar />
        <h3>Hellow</h3>
        <Outlet />
        </div>
    );
}

export default RootLayout;
