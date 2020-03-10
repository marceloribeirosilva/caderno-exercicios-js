const exercicioCinco = require('./05')

test('Rodando exercício 05', ()=>{
    expect(exercicioCinco.somaNumerosParesVetor([1,2,3,4],5)).toBe(30)
})