const chalk = require ("chalk")
const inquirer = require("inquirer")

inquirer.prompt([
    {
      name: 'p1',
      message: 'Qual o seu nome?'
    },
    {
      name: 'p2',
      message: 'Qual a sua idade?'
    }
  ]
  ).then(answer => {
    console.log(chalk.bgYellow.black(`O nome é: ${answer.p1} e a idade é: ${answer.p2}`))
  })
.catch((err) => console.log(err))


   



