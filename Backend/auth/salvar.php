<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Content-Type: application/json");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit(0);
    }

    $arquivo = "../../Data/usuarios.json";

    if (!file_exists($arquivo)) {
        file_put_contents($arquivo, json_encode([]));
    }

    $usuarios = json_decode(file_get_contents($arquivo), true);

    $dados = json_decode(file_get_contents("php://input"), true);

    $user = $dados['usuario'] ?? "";
    $senha = $dados['senha'] ?? "";
    $confirmar_senha = $dados['confirmar'] ?? "";

    if (empty($user) || empty($senha) || empty($confirmar_senha)) {
        echo json_encode([
            "sucesso" => false,
            "mensagem" => "Preencha todos os campos"
        ]);
        exit;
    }

    if($senha !== $confirmar_senha){
        echo json_encode([
            "sucesso" => false,
            "mensagem" => "As senhas não coincidem!"
        ]);
        exit;
    }

    foreach ($usuarios as $u) {
        if ($u['usuario'] === $user) {
            echo json_encode([
                "sucesso" => false,
                "mensagem" => "Usuário já existe"
            ]);
            exit;
        }
    }

    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    $usuarios[] = [
        "usuario" => htmlspecialchars($user),
        "senhaHash" => $senhaHash
    ];

    file_put_contents($arquivo, json_encode($usuarios));

    echo json_encode([
        "sucesso" => true,
        "mensagem" => "Cadastro realizado com sucesso"
    ]);

?>