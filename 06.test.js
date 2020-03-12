const exercicioSeis = require('./06')
const axios = require('axios')

jest.mock('axios')

const res = {
    data: {
        value: [
            {cotacaoVenda: 4.6}
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
        mockDate('2020-02-22T12:00:00z')
        const today = exercicioSeis.getToday()        
        expect(today).toBe('2-21-2020')
    }) 
})

test('getUrl',()=>{
    const url = exercicioSeis.getUrl('DATA')
    expect(url).toBe('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=\'DATA\'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda')
})

test('getCotacao', async ()=>{
    const getToday = jest.fn()
    getToday.mockReturnValue('01-01-2020')
    
    const getUrl = jest.fn()
    getUrl.mockReturnValue('url')

    const getCotacaoAPI = jest.fn()
    getCotacaoAPI.mockResolvedValue(res)

    const extractValueCotacao = jest.fn()
    extractValueCotacao.mockReturnValue(3.0)

    const val = await exercicioSeis.pure.getCotacao({getToday, getUrl, getCotacaoAPI, extractValueCotacao})()
    expect(val).toBe(3.0)

})

test('getCotacaoException', async ()=>{
    const getToday = jest.fn()
    getToday.mockReturnValue('01-01-2020')
    
    const getUrl = jest.fn()
    getUrl.mockReturnValue('url')

    const getCotacaoAPI = jest.fn()
    getCotacaoAPI.mockReturnValue(Promise.reject('err'))

    const extractValueCotacao = jest.fn()
    extractValueCotacao.mockReturnValue(3)

    const val = await exercicioSeis.pure.getCotacao({getToday, getUrl, getCotacaoAPI, extractValueCotacao})()
    expect(val).toBe('')
})
