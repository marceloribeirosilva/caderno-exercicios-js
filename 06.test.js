const exercicioSeis = require('./06')
const axios = require('axios')

jest.mock('axios')

const res = {
    data: {
        value: [
            {cotacaoVenda: 4.60}
        ]
    }
}

test('getCotacaoAPI', ()=>{
    axios.get.mockResolvedValue(res)
    exercicioSeis.getCotacaoAPI('url').then(resp => {
        expect(resp).toEqual(res)
        .expect(axios.get.mock.calls[0][0]).toBe('url') // Testa se ele chama o axios passando a mesma url que passamos de parâmetro. Essa é a ideia do teste
    })    
})

test('extractCotacao',()=>{
    const cotacao = exercicioSeis.extractValueCotacao(res)
    expect(cotacao).toBe(4.60)
})