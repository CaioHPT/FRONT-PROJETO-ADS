import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './index.css';

export default function Cadastro() {
    const [dadosFormulario, setDadosFormulario] = useState({
        usuario: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dadosFormulario);
    };

    return (
        <div className="area-principal">
            <main className="formulario">
                <h1>Cadastre-se</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="usuario">Usuário:</label></td>
                                <td><input type="text" id="usuario" name="usuario" value={dadosFormulario.usuario} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email:</label></td>
                                <td><input type="email" id="email" name="email" value={dadosFormulario.email} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="senha">Senha:</label></td>
                                <td><input type="password" id="senha" name="senha" value={dadosFormulario.senha} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="confirmarSenha">Confirmar Senha:</label></td>
                                <td><input type="password" id="confirmarSenha" name="confirmarSenha" value={dadosFormulario.confirmarSenha} onChange={handleChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">Cadastrar</button>
                </form>
                <p>Já tem uma conta? <Link to="signIn">Faça login</Link></p>
            </main>
        </div>
    );
}
