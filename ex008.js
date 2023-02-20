var vel = 78.5
var valor = vel - 60
console.log(`A velocidade do seu carro é ${vel}Km/h`)
console.log('Dirija sempre usando o cinto de segurança.')
if (vel > 60) { // Condição Simples
    console.log(`Você ultrapassou a velocidade permitida, o seu carro está ${valor} Km/h a mais do que a velocidade permitida. MULTADO!`)
}