import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/login.css';

function Login(){

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function logar(e){

        e.preventDefault();

        const response = await fetch(
            'http://localhost:8080/sistema-autenticacao-fullstack/Backend/auth/logar.php', 
            {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                }, 
                body: JSON.stringify({
                    usuario,
                    senha
                })
            }
        );

        const dados = await response.json();

        alert(dados.mensagem);

        if(dados.sucesso){
        navigate('/dashboard');
    }

    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={logar}>

                <input
                    type="text"
                    placeholder="Usuário"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button type="submit">
                    Entrar
                </button>

            </form>
        </div>
    );
}

export default Login;