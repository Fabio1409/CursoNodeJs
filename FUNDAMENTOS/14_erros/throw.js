const x = "10";


// checar se x e um número
if(!Number.isInteger(x)){
    throw new Error("O valor de x nao é um número inteiro.")
}

console.log("Continunando o código...")