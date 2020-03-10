/*
5. Dado um vetor, crie uma função que multiplique por x os valores e retorne a soma dos números pares. Criar um teste de unidade para essa função.

npm install --save-dev jest

*/

const somaNumerosParesVetor = (valores, mult) => {
    const pares = valor => valor % 2 === 0
    const valoresMultiplicados = valores.map(val => val * mult)
    return valoresMultiplicados
        .filter(pares)
        .reduce((prev, curr)=> prev + curr)
}

module.exports = {
    somaNumerosParesVetor
}