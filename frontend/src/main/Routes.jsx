import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';
import LoginForm from '../components/user/LoginForm';
import RegisterForm from '../components/user/RegisterForm';

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/user" element={<Usercrud />}/>
            <Route path="/user" element={<LoginForm />}/>
            <Route path="/user" element={<RegisterForm />}/>
        </Routes>
    )
}