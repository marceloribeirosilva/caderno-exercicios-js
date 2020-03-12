/*
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
*/ 

const jurosSimples = (capital, juros, tempo) => {
    return (capital * juros) * tempo
}

const montanteJurosSimples = ({jurosSimples}) => (capital, juros, tempo) => {
    return capital + jurosSimples(capital, juros, tempo)
}

const montanteJurosComposto = (capital, juros, tempo) => {
    return (capital * (1 + juros)**tempo).toFixed('2')
}

const jurosComposto = ({montanteJurosComposto}) => (capital, juros, tempo) => {
    return montanteJurosComposto(capital, juros, tempo) - capital
}

module.exports = {
    jurosSimples,
    montanteJurosSimples: montanteJurosSimples({jurosSimples}),
    jurosComposto : jurosComposto({montanteJurosComposto}),
    montanteJurosComposto,
    pure: {
        montanteJurosSimples,
        jurosComposto
    }
}