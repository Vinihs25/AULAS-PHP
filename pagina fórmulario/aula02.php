<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado do processo</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style.Form.css">
</head>
<body>
    
<header>
    <h1>Resultado do processamento</h1>
</header>


<main>
    <?php 
    $nome = $_GET["nome"];
    $sobrenome = $_GET["sobrenome"];

    echo "É um prazer te conhecer, $nome $sobrenome! a Padaria Dom Bosco Agradece o seu cadastro!"
    ?>

    <p>
        <a href="javascrip:history.go(-1)">Voltar para a página anterior</a>
    </p>
</main>

</body>
</html>



