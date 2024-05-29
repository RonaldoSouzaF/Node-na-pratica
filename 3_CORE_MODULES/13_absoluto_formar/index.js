const path = require ('path')

//path absoluto
console.log(path.resolve('teste.txt'))

//formar path
const midFolder = "relatiorios"
const fileName = "matheus.txt"

const finalpath = path.join("/",'arquivos',midFolder,fileName)

console.log(finalpath)