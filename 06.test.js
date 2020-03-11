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

describe('getToday',()=>{
    const RealDate = Date;

    function mockDate(date){
        global.Date = class extends RealDate {
            constructor(){
                return new RealDate(date)
            }
        }
    }

    afterEach(()=>{
        global.Date = RealDate
    })

    test('getToday',()=>{
        mockDate('2020-02-13T12:00:00z')
        const today = exercicioSeis.getToday()
        console.log(today)
        expect(today).toBe('2-12-2020')
    })
})
