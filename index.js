function calcular() {
    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const operacao = document.getElementById('operacao').value;
    const resultadoElement = document.getElementById('resultado');

    let resultado;

    switch (operacao) {
        case 'somar':
            resultado = n1 + n2;
            break;
        case 'subtrair':
            resultado = n1 - n2;
            break;
        case 'multiplicar':
            resultado = n1 * n2;
            break;
        case 'dividir':
            resultado = n1 / n2;
            break;
        default:
            resultado = 'Escolha a operação!';
    }

    resultadoElement.textContent = 'Resultado: ' + resultado;
}

document.getElementById('calculator').addEventListener('submit', function(e){
    e.preventDefault(); 
    calcular();   
});

