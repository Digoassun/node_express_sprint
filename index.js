import prompt from "prompt-sync";

const comando = prompt()
const cssProprieties = (input) => {
    let output = []
    while (input != "saida") {
        output.push(input);
        input = comando("Insira uma propriedade CSS:")
    }
    let resultado = output.sort().join("\n")
    console.log(resultado)
    
}
cssProprieties()