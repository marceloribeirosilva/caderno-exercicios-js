/*
Criar uma função que converta em R$ pelo valor do Dolar atual.
Utilizar acesso à API do Banco Central.

-- Dica: Utilizar axios para acessar a api

https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos

Criar um teste de unidade
*/

const axios = require('axios')

const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=\'${data}\'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda`

const getCotacaoAPI = url => axios.get(url)
const extractValueCotacao = res => res.data.value[0].cotacaoVenda
const getToday = () => {
    const today = new Date()
    return (today.getMonth()+1)+'-'+(today.getDate()-1)+'-'+today.getFullYear()
}
const getCotacao = async ()=> {
    try{        
        const url = getUrl(getToday())
        const res = await getCotacaoAPI(url)
        const valueCotacao = extractValueCotacao(res)    
        return valueCotacao
    }
    catch (err) {
        return ''
    }
}

(async()=>{
    const cotacao = await getCotacao()
    console.log('cotacao', cotacao)
})()

module.exports = {
    getCotacaoAPI,
    extractValueCotacao,
    getToday
}

