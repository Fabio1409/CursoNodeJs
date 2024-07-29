const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // Correção: 'contenty-Type' para 'Content-Type'
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Ola Mundo! este e meu primeiro Server com HTML.</h1><p>Testando Atualização</p>');
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
