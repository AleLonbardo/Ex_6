function contarVogais(nome) {
    // Converter o nome para min�sculas para facilitar a compara��o
    nome = nome.toLowerCase();

    // Inicializar o contador de vogais
    var contadorVogais = 0;

    // Definir um array com as vogais
    var vogais = ['a', 'e', 'i', 'o', 'u'];

    // Iterar sobre cada caractere do nome
    for (var i = 0; i < nome.length; i++) {
        // Verificar se o caractere atual � uma vogal
        if (vogais.includes(nome[i])) {
            contadorVogais++;
        }
    }

    // Retornar a quantidade de vogais encontradas
    return contadorVogais;
}

// Ler o nome do usu�rio
var nomeUsuario = prompt("Digite seu nome:");

// Calcular e exibir a quantidade de vogais no nome
var quantidadeVogais = contarVogais(nomeUsuario);
console.log("O nome " + nomeUsuario + " cont�m " + quantidadeVogais + " vogais.");
