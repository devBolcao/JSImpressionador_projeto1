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

// passos para o colocar o brench de volta ao codigo principal
// git checkout main = seleciona novamente a main
// git pull = atualiza a main, pois pode ter codigos de outros desenvolvedores
// git chekout Alterecao_Mensagens = volta pro branche que esta rabalhando
// git merge main = faz o merge com o main, resolve os conflitos se possuir e add, commit novamente
// git checkout main = resolvido os conflito volta pro projeto principal, no exemplo o main
// git merge Alterecao_Mensagens = faz o merge com o seu codigo, pois ja foi resolvido os conflitos