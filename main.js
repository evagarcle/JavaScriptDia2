// BOOLEANOS
let booleano1 = true
let booleano2 = false

let booleanoAnd = booleano1 && booleano2
let booleanoOr = booleano1 || booleano2
let booleanoNot = !booleano1 &&  !booleano2
let booleanoMix0 = (booleanoOr) && (booleano1 || booleanoNot)

// OPERADORES
let valorDivision = (17 / 3).toFixed(2)
console.log(valorDivision)

let valorResto = 17 % 7
console.log(valorResto)

// LÓGICA DE PROGRAMACIÓN
let A = 9
let B = '9'

if (A == B) {
  console.log ('Son iguales')
} // Si ponemos === en vez de == , no se cumple la condición porque compara también el tipo de dato


let mochila = ['gafas', 'cartera', 'llaves', 'bolígrafo']

if (mochila.length > 10) {
  console.log('No puedo cargar con tantas cosas')
} else if (mochila.length < 20 && mochila.length > 2) {
  console.log('Qué bien voy con mi mochila')
} else {
  console.log ('Creo que no necesito una mochila')
}


let contarHasta10 = 0
for (let i = 0; i < 10; i++) {
  // contarHasta10 = contarHasta10 + 1
  contarHasta10 += 1
  console.log(contarHasta10)
}



let diaFestivo = true
diaFestivo ?  console.log('Hoy no trabajo') : console.log ('Hoy trabajo');



let arrayBucle = []
let x = 4
while (x <= 18) {
  arrayBucle.push(x)
  x++
}
console.log(arrayBucle)





let resultado = 0

for (let i = 0; i < arrayBucle.length; i++) {
  // resultado = arrayBucle.reduce((valorAnterior, valorActual) => {
  //   return valorAnterior + valorActual;
  // }, 0);
  // resultado = 0 + 4
  // resultado = 4 + arrayBucle[i]
  resultado = resultado + arrayBucle[i]
}
console.log(resultado)



let nuevoArray = ['Con', 'Sofia', 'aprendiendo', 'bucles']
for (const elemento of nuevoArray) {
  console.log(elemento)
}



for (let x in nuevoArray) {
  console.log(nuevoArray[x])
}




let numero = 1
while (numero <= 20){
  if (numero % 3 == 0) {
    console.log('Patata')
  }
  numero++
}


