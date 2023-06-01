function sumar(){
    const numero1 = document.getElementById('numero1')
    const numero2 = document.getElementById('numero2')
    const resultado = document.getElementById('resultado')
    const numero1Value = Number(numero1.value)
    const numero2Value = Number(numero2.value)
    const resultadoValue = numero1Value + numero2Value
    resultado.innerHTML = resultadoValue
 }
 function restar(){
    const numero1 = document.getElementById('numero1')
    const numero2 = document.getElementById('numero2')
    const resultado = document.getElementById('resultado')
    const numero1Value = Number(numero1.value)
    const numero2Value = Number(numero2.value)
    const resultadoValue = numero1Value - numero2Value
    resultado.innerHTML = resultadoValue
 }

 function multiplicar(){
    const numero1 = document.getElementById('numero1')
    const numero2 = document.getElementById('numero2')
    const resultado = document.getElementById('resultado')
    const numero1Value = Number(numero1.value)
    const numero2Value = Number(numero2.value)
    const resultadoValue = numero1Value * numero2Value
    resultado.innerHTML = resultadoValue
 }

 function dividir(){
    const numero1 = document.getElementById('numero1')
    const numero2 = document.getElementById('numero2')
    const resultado = document.getElementById('resultado')
    const numero1Value = Number(numero1.value)
    const numero2Value = Number(numero2.value)
    const resultadoValue = numero1Value / numero2Value
    resultado.innerHTML = resultadoValue
 }

