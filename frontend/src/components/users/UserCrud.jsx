import React, { Component } from "react";
import Main from '../UserCrud.css';
import axios from 'axios';
import { Navigate } from 'react-rooter-dom';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtítle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
};

const baseUrl = 'http://localhost:3001/users';
const initialSate = {
    user: { name: '',email:''},
    list: {}
};