const compararNumeros = () => {
    return new Promise((resolve, reject) => {
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const num3 = parseInt(document.getElementById('num3').value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            reject("Por favor ingresa tres números válidos.");
        } else {
            const menor = num1 <= num2 && num1 <= num3 ? num1 
                        : num2 <= num1 && num2 <= num3 ? num2 
                        : num3;

            const iguales = num1 === num2 ? `El número igual es: ${num1}`
                        : num1 === num3 ? `El número igual es: ${num1}`
                        : num2 === num3 ? `El número igual es: ${num2}`
                        : null;

            resolve({ menor, iguales });
        }
    });
}

const mostrarResultado = async () => {
    try {
        const resultado = await compararNumeros();
        document.getElementById('resultado').innerHTML = `El número menor es: ${resultado.menor}` + 
            (resultado.iguales ? `<br>${resultado.iguales}` : '');
    } catch (error) {
        document.getElementById('resultado').innerHTML = error;
    }
}
