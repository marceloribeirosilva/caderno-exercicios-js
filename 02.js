/*
2) A função readdir disponível no módulo fs do Node, permite ler um diretório, e retornar seu conteúdo como um vetor.
   Crie uma versão em Promise da função.
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

readdir('../public').then(data => console.log(data)).catch(err => console.log(err));

