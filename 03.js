/*
3) A lista de arquivos retornado no exercício anterior, também retorna diretórios. Crie uma função que retorne todos os sub-diretórios em um vetor (deve-se ignorar os arquivos retornados pelo readdir).

Algumas funções do fs e de Promises que te ajudarão:

fs.stat(caminhoArquivoDiretorio, (err, stats) => {})
stats que é retornado no callback possui um isDirectory() e um isFile()
(sou bonzinho né, cantei a pedra aqui ;) )
Promise.all(vetorDePromises): aguarda um vetor de promises ser executado, e retorna uma promise que retorna para um vetor com o resultado.
Ex:
   Promise.all([promise1, promise2]).then( results => {

     results[0] // resultado de promise1

     results[1] // resultado de promise2

   })

este exercício é um pouco mais desafiador; é normal ter um pouco de dificuldade
 */

const fs = require('fs')

const readdir = path => new Promise((resolve, reject) => {
    fs.readdir(path, (err, data)=>{
        if (err){
            reject(err)
        }
        else{
            resolve(data)
        }
    })
})

const stat = path => new Promise((resolve, reject) => {
    fs.stat(path, (err, stat)=>{
        if(err){
            reject(err)
        }
        else {
            resolve(stat)
        }
    })
})

const isDirectory = async (path, file) =>{
    const stats = await stat(path + '/' + file)
    return stats.isDirectory() ? file : false
}

const execute = async ()=> {
    const path = '../public'
    const files = await readdir(path)
    const check = await Promise.all(files.map((file) => isDirectory(path, file))) 
    const directories = check.filter((f)=>f)
    console.log(directories)
}

execute()