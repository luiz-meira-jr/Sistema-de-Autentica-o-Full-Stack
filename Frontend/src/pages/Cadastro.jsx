import { useState } from 'react';

function Cadastro() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function cadastrar(e) {

        e.preventDefault();

        const response = await fetch(
            'http://localhost:8080/sistema de autenticação full stack/backend/auth/salvar.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario,
                    senha
                })
            }
        );

        const dados = await response.json();

        alert(dados.mensagem);
    }

    return (
        <form onSubmit={cadastrar}>

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
                Cadastrar
            </button>

        </form>
    );
}

export default Cadastro;