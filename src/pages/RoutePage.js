import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Route , Routes } from 'react-router-dom';
import SingupPage from './singupPage';
import Mainpage from './mainpage';
import AdminLogin from './adminLogin';
import Loginpage from './loginpage';
import Dashboard from './services/dashboard';
import Protectedroute from './services/protectedroute';

const RoutePage = () => {
    return (
        <Routes>
            <Route path='/' element={<SingupPage/>}></Route>
            <Route path='Loginpage' element={<Loginpage/>}></Route>
            <Route path='admin' element={<AdminLogin/>}></Route>
            <Route path='dashboard' element={<Dashboard/>}></Route>
            <Route path='mainpage' element={<Mainpage/>}></Route>
        </Routes>
    );
}

export default RoutePage