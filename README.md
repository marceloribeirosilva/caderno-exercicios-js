# caderno-exercicios-js

### Caderno de Exercícios JavaScript

Exercícios para ajudar no entendimento e na fixação do conhecimento da linguagem JavaScript

1. Em linguagens síncronas é comum a função sleep(tempo) assim, pode-se por exemplo escrever algo no console, 
pausar o script por x tempo e escrever algo mais algo como:
```
console.log('Olá!')
sleep(2000)
console.log('Depois de 2segs')
```
Simule o sleep de maneira correta em Javascript (sem travar a thread principal) utilizando promises e uma função async/await

2. A função readdir disponível no módulo fs do Node, permite ler um diretório, e retornar seu conteúdo como um vetor.
Crie uma versão em Promise da função.

3. A lista de arquivos retornado no exercício anterior, também retorna diretórios.
Crie uma função que retorne todos os sub-diretórios em um vetor.

4. A lista de arquivos retornado no exercício 2, também retorna diretórios.
Crie uma função que retorne todos os arquivos em um vetor.
