import React from 'react';
import 'boorstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContent';
import PrivateRoute from '../auth/PrivateRoute';

//Componentes principais
import logo from '../components/template/Logo';
import Nav from '../components/template/Nav';

//Páginas
import Login from '../components/template/Login';
import Register from '../components/template/Register';
import UserCrud from '../domponents/user/UserCrud';
import Home from '../components/template/Home';
import Footer from '../components/template/template';

function App(){
    return (
        <AuthProvider>
            <Router>
                <div className='app'> {/*Layout principal com grid e sem fundo branco */}

                </div>
            </Router>
        </AuthProvider>
    )
}
