import './index.css';

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';

export default function Login() {
    const [open, setOpen] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState('')
    const [variant, setVariant] = useState('')

    const [dadosFormulario, setDadosFormulario] = useState({
        email: '',
        senha: ''
    });

    const [cookies, setCookie] = useCookies(['email']);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosFormulario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const signIn = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:5000/login`, dadosFormulario)
            .then(() => {
                setMessageSnackBar("Logado com sucesso!")
                setVariant("success")
                setOpen(true)

                let expireCookie = new Date()
                expireCookie.setTime(expireCookie.getTime() + 10000)

                setTimeout(() => {
                    setCookie('email', dadosFormulario.email, { expires: expireCookie })

                    window.location.pathname = "/"
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
        <main className="containerLogin">
            <main className="formulario">
                <h1>Login</h1>
                <p>Bem-vindo! Aqui temos viagens incríveis e descontos só para você.</p>
                <form onSubmit={signIn}>
                    <div className="grupo-formulario">
                        <label htmlFor="email" className="rotulo">Email:</label>
                        <input type="email" id="email" name="email" value={dadosFormulario.email} onChange={handleChange} required={true} />
                    </div>
                    <div className="grupo-formulario">
                        <label htmlFor="senha" className="rotulo">Senha:</label>
                        <input type="password" id="senha" name="senha" value={dadosFormulario.senha} onChange={handleChange} required={true} />
                    </div>
                    <div className="grupo-formulario">
                        <button type="submit" className="entrar">Entrar</button>
                    </div>
                </form>
                <p>Novo por aqui? <Link to="/register">Cadastre-se</Link></p>
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
        </main>
    );
}
