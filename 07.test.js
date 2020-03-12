const exercicioSete = require('./07')

test('jurosSimples', ()=>{
    const val = exercicioSete.jurosSimples(1000, 0.1, 12)
    expect(val).toBe(1200)
})

test('montanteJurosSimples',()=>{
    const jurosSimples = jest.fn()
    jurosSimples.mockReturnValue(800)

    const val = exercicioSete.pure.montanteJurosSimples({jurosSimples})(1000,0.1,12)
    expect(val).toBe(1800)
})

test('montanteJurosComposto',()=>{
    const val = exercicioSete.montanteJurosComposto(1000,0.1,12)
    expect(val).toBe('3138.43')
})


test('jurosComposto', ()=>{
    const montanteJurosComposto = jest.fn()
    montanteJurosComposto.mockReturnValue(25480)

    const val = exercicioSete.pure.jurosComposto({montanteJurosComposto})(1000,0.1,12)
    expect(val).toBe(24480)
})