import './index.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';

export default function Cadastro() {
    const [open, setOpen] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState('')
    const [variant, setVariant] = useState('')


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const [dadosFormulario, setDadosFormulario] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosFormulario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const register = (e) => {
        e.preventDefault();

        if (dadosFormulario.confirmarSenha !== dadosFormulario.senha) {
            setMessageSnackBar("As senhas digitadas não são iguais, por favor verifque a senha digitada!")
            setVariant("warning")
            setOpen(true)

            return
        }

        const usuario = {
            nome: dadosFormulario.nome,
            sobrenome: dadosFormulario.sobrenome,
            email: dadosFormulario.email,
            senha: dadosFormulario.senha,
        }

        axios.post(`http://127.0.0.1:5000/usuarios`, usuario)
            .then(() => {
                setMessageSnackBar("Conta criada com sucesso!")
                setVariant("success")
                setOpen(true)

                setTimeout(() => {
                    window.location.reload()
                }, 3100)
            })
            .catch((res) => {
                if (res.response != null) {
                    const response = res.response
                    if (response.status === 400) {
                        setMessageSnackBar(response.data.mensagem)
                        setVariant("error")
                        setOpen(true)
                        return
                    }
                }

                setMessageSnackBar("Servidor fora do ar!")
                setVariant("warning")
                setOpen(true)
            })
    };

    return (
        <div className="containerRegister">
            <main className="formulario">
                <h1>Cadastre-se</h1>
                <form onSubmit={register}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="nome">Nome:</label></td>
                                <td><input type="text" id="nome" name="nome" value={dadosFormulario.nome} onChange={handleChange} required={true} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="sobrenome">Sobrenome:</label></td>
                                <td><input type="text" id="sobrenome" name="sobrenome" value={dadosFormulario.sobrenome} onChange={handleChange} required={true} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email:</label></td>
                                <td><input type="email" id="email" name="email" value={dadosFormulario.email} onChange={handleChange} required={true} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="senha">Senha:</label></td>
                                <td><input type="password" id="senha" name="senha" value={dadosFormulario.senha} onChange={handleChange} required={true} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="confirmarSenha">Confirmar Senha:</label></td>
                                <td><input type="password" id="confirmarSenha" name="confirmarSenha" value={dadosFormulario.confirmarSenha} onChange={handleChange} required={true} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">Cadastrar</button>
                </form>
                <p>Já tem uma conta? <Link to="/signIn">Faça login</Link></p>
            </main>

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={variant}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {messageSnackBar}
                </Alert>
            </Snackbar>
        </div>
    );
}
