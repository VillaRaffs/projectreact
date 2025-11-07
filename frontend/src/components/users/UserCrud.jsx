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

export default class UserCrud extends Component{
    state = { ...initialSate};

    componentDidMount(){
        axios(baseUrl)
        .then(resp => this.setState({ list: resp.data }))
        .catch(err => console.error("Erro ao carregar usuários:", err));
    }
}

clear(){
    this.setState({ user: initialState.user});
}

save(){
    const user = this.state.user;
    const method = use.id ? 'put' : 'post';
    const url = use.id ? `${baseUrl}/${user.id}`: baseUrl;

    axios[method](url, user)
    
}