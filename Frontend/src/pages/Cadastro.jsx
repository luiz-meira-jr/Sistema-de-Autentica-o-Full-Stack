import { useState } from 'react';

function Cadastro() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');

    async function cadastrar(e) {

        e.preventDefault();

       // console.log("Botão clicado");

        const response = await fetch(
            'http://localhost:8080/sistema-autenticacao-fullstack/Backend/auth/salvar.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario,
                    senha,
                    confirmar
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

            <input
                type="password"
                placeholder="Confirmar senha"
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>

        </form>
    );
}

export default Cadastro;