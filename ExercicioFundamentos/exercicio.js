import inquirer  from 'inquirer'
import chalk from 'chalk';

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual seu nome?: ',
    },
    {
        name: 'idade',
        message: 'Qual sua idade?: ',
    },
])
.then((answers) => {
    if(!answers.nome || !answers.idade){
        throw new Error("O nome e a idade são Obrigatório!")
    }
    console.log(answers);
    console.log(chalk.bgYellow.black(`O seu nome é: ${answers.nome}, e sua idade é ${answers.idade} anos!`));
})
.catch((err) => console.log(err));

