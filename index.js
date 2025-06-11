import { turboLogger } from "./logger.js";

console.log("Estou usando o Git Hub");
turboLogger("Uma mensagem");

turboLogger("Colocando uma nova mensagem no branch novo", "red");


// Códigos do primeiro projeto no Github

// echo "# JSImpressionador_projeto1" >> README.md
// git init
// git add README.md
// git add index.js
// git commit -m "Meu primeiro commit"
// git branch -M main
// git remote add origin https://github.com/devBolcao/JSImpressionador_projeto1.git
// git push -u origin main

// # Adiciona todos os arqivos que devem ser adiconados
// git add .

// # Empurra as alterações para o servidor
// git push

// #puxa as informações do servidor
// git push

// #trocando de branches - coloca -b, caso a branche não exista, assim criando
// git checkout -b Alteracao_Mensagens