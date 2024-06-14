import './index.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [lembrarSenha, setLembrarSenha] = useState(false);

    const alternarLembrarSenha = () => {
        setLembrarSenha(!lembrarSenha);
    };

    return (
        <main className="containerLogin">
            <main className="formulario">
                <h1>Login</h1>
                <p>Bem-vindo! Aqui temos viagens incríveis e descontos só para você.</p>
                <form>
                    <div className="grupo-formulario">
                        <label htmlFor="email" className="rotulo">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="grupo-formulario">
                        <label htmlFor="senha" className="rotulo">Senha:</label>
                        <input type="password" id="senha" name="senha" />
                    </div>
                    <div className="grupo-formulario">
                        <button type="submit" className="entrar">Entrar</button>
                    </div>
                </form>
                <p>Novo por aqui? <Link to="/register">Cadastre-se</Link></p>
            </main>
        </main>
    );
}
