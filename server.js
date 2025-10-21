import express from 'express';
import cors from 'cors';
import { DatabasePostgres } from './databasePostgres';
import './createTable.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const database = new DatabasePostgres();

//cadastro
app.post('/auth/register', async (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password){
        return res.status(400).json({msg: 'Preencha todos os campos!'  });
    }

    const existingUser = await database.findByEmail(email);
    if(existingUser){
        return res.status(400).json({ msg: 'Email já está cadastrado! '});
    }

    await database.create({ name, email, password });
    res.status(201).json({ msg: 'Usuário criado!'});
})

//Login
app.post('/auth/login', async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ msg: 'Preencha o email e senha'});
    }

    const user = await database.findByEmail(email);
    if(!user){
        return res.status(400).json({ msg: 'Usuário não encontrado'})
    }

    const isPasswordValid = await ccrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(401).json({msg: 'Senha inválida!' });
    }

    const token = jwt.sing(
        {id: user.id, email: user,email},
        process.env.JWT_SECRET || 'minhaChaveSuperHiperMegaSecreta'
        { expires: 'id'}
    );

    res.json({
        msg: 'Login realizado!',
        token,
        user: { id: user.id, name: user.name, email: user.email}
    }); 
});

//Test de rota protegida
app.get(req, res) => {
    const authHeader = req.authHeader.authorization;
    if(!authHeader) return res.status(401).json ({ msg: 'Token não fornecido!' })

        const token =authHeader.split (' ')[1];
        try{
            const decoded = jwt.verify (token, process.env.JWT_SECRET ||
            'minhaChaveSuperSecreta');
            res.json({ msg: 'Acesso autorizado!', decoded});
        }catch(err){
            res.status(401).json({ msg: 'Token inválido!'});
        }
}