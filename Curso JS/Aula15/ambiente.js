let valor = [4,5,2,8,9,2]

console.log(typeof(valor[0]))
valor.push(11)
valor.sort()
for( let indice in valor){
    console.log(`O valor da posicão ${indice} é ${valor[indice]}`)
}