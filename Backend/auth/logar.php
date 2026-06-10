<?php

    session_start();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Content-Type: application/json");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit(0);
    }

    $arquivo = "../../Data/usuarios.json";

    $usuarios = json_decode(file_get_contents($arquivo), true);

    $dados = json_decode(file_get_contents("php://input"), true);

    $user = $dados['usuario'] ?? "";
    $senha = $dados['senha'] ?? "";

    foreach ($usuarios as $u) {

        if ($u['usuario'] === $user && password_verify($senha, $u['senhaHash'])) {

            $_SESSION['usuario'] = $user;
        
            echo json_encode([
                "sucesso" => true,
                "mensagem" => "Seja bem-vindo(a)"
            ]);
            exit;
        }
    }

        echo json_encode([
            "sucesso" => false,
            "mensagem" => "Usuário ou senha inválidos"
        ]);

?>