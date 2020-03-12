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

5. Dado um vetor, crie uma função que multiplique os valores por x e retorne a soma dos números pares. Criar um teste de unidade para essa função.

6. Criar uma função que converta em R$ pelo valor do Dolar atual, utilizando acesso à API do Banco Central.
    #### Dica: Utilizar axios para acessar a api: https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos
    ##### Criar testes de unidade

7. No arquivo 07.js, criar as seguintes funções 

* Função que irá representar o cálculo do Juros Simples. Essa função recebe capital, juros e o tempo do empréstimo. Retorna o valor do juros calculado.

Cálculo: capital * juros * tempo

* Função que irá representar o cálculo do montante + juros simples. 

Cálculo: capital + juros simples

* Função que irá representar o cálculo do montante + juros compostos.

Cálculo: capital * (1 + juros) ^ tempo

* Função que irá representar apenas o juros composto sem o montante

Cálculo: (montante + juros composto) - capital

Criar teste de unidade para cada função.