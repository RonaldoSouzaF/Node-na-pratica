const chalk = require ("chalk")

const nota = 6

if(nota >= 7){
    console.log(chalk.green('parabens! vc esta aprovado!'))
}else {
    console.log(chalk.bgMagenta.red('vc nao estudou malandro'))
}

