import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Login() {
    const [lembrarSenha, setLembrarSenha] = useState(false);

    const alternarLembrarSenha = () => {
        setLembrarSenha(!lembrarSenha);
    };

    return (
        <div className="area-principal">
            <main className="formulario">
                <h1>Login</h1>
                <p>Bem-vindo! Aqui temos viagens incríveis e descontos só para você.</p>
                <form>
                    <div className="grupo-formulario">
                        <label htmlFor="usuario" className="rotulo">Usuário:</label>
                        <input type="text" id="usuario" name="usuario" />
                    </div>
                    <div className="grupo-formulario">
                        <label htmlFor="senha" className="rotulo">Senha:</label>
                        <input type="password" id="senha" name="senha" />
                    </div>
                    <div className="lembrete-senha">
                        <label>
                            <input type="checkbox" checked={lembrarSenha} onChange={alternarLembrarSenha} />
                            Lembrar senha
                        </label>
                    </div>
                    <div className="grupo-formulario">
                        <button type="submit" className="entrar">Entrar</button>
                    </div>
                </form>
                <p>Novo por aqui? <Link to="/Register">Cadastre-se</Link></p>
            </main>
        </div>
    );
}
