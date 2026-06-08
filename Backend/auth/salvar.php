<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$arquivo = "../Data/usuarios.json";

if (!file_exists($arquivo)) {
    file_put_contents($arquivo, json_encode([]));
}

$usuarios = json_decode(file_get_contents($arquivo), true);

$dados = json_decode(file_get_contents("php://input"), true);

$user = $dados['usuario'] ?? "";
$senha = $dados['senha'] ?? "";

if (empty($user) || empty($senha)) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Preencha todos os campos"
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

$usuarios[] = [
    "usuario" => htmlspecialchars($user),
    "senha" => htmlspecialchars($senha)
];

file_put_contents($arquivo, json_encode($usuarios));

echo json_encode([
    "sucesso" => true,
    "mensagem" => "Cadastro realizado com sucesso"
]);