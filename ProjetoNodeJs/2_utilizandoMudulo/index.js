const fs = require('fs'); // file system  variavel que ja chamou o import file system
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo:', err); // Mensagem de erro mais detalhada
        return;
    }

    console.log(data);
});
