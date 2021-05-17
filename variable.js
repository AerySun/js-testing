//Erstellen und Initialisieren einer Konstante
const number = 10

//Ausgabe der Konstante
console.log(number)

//Erstellen einer variablen mit dem Namen variable
let variable = 5

//Ausgabe der variablen
console.log(variable)

//Änderung des Wertes der Variablen variable auf 22
variable = 22

//Ausgabe der Variablen
console.log(variable)

//Definition und Zuweisung einer Zeichenfolge
let string = 'A string'
string = 'This is a string'

//Ausgabe der Zeichenfolge
console.log(string)

//Definition und Zuweisung eines negativen Wertes
let negative = -22

//Ausgabe des negativen Wertes
console.log(negative)

//Definition und Zuweisung eines Wertes mit Nachkommastellen
let num = 3.56

console.log(num)

//Definition mehrerer Variablen
let a, b, c, d
a = 5
console.log(a) //Ausgabe 5

//exercise 
const number1 = 5
let string1 = '10'
console.log(number1, string1)
string1 = 4
console.log(string1)

//exercise 2
let helloString = 'Hallo Variablen'
console.log(helloString, helloString, helloString)
//i=index 1 zeichen variable
for (let i = 0; i < 3; i++) { console.log(helloString) }

//exercise operatoren
const y = 10
const z = 2
const x = y / z
console.log(x)

//exercise 2 operatoren
function code1() {
    const y = 20
    const z = 10
    const x = (y / z) * 4;
    console.log(x)
  }
  
  code1()

//exercise 3 operatoren
function code2() {
    const firstName = 'Daniel'
    console.log('Hallo'+ firstName+'!')
}
code2()

//exercise 4 basics
function code3() {
  const firstName = 'Janine'
  const lastName = 'Quinten' 
  console.log('Hallo ' + firstName + ' ' + lastName)
}
code3()

function code32() {
  const firstName = 'Janni'
  const lastName = 'meow'
  console.log(`Hallo ${firstName} ${lastName}`)
}
code32()

function code33() {
 let firstName = 'janine'
 const lastName = 'Quinten'
 const template = `Hallo ${firstName} ${lastName}`
 console.log(template)
 firstName = 'Janni'
 console.log(template)
}
code33()

//functions p.48

let result = 0

function multiply(faktor1, faktor2) {
  result = faktor1 * faktor2
  return result
}
console.log(multiply(10,5))

function names(firstName) {
  console.log(`Hello ${firstName}`)
}
names('Daniel')
names('David')
names('Kaleb')

function add(n1, n2) {
  return n1 + n2
}

function sub(n1, n2){
  return n1 - n2
}

function mul(n1, n2){
  return n1 * n2
}

function div(n1, n2){
  return n1 / n2
}

console.log(add(1,3))
console.log(sub(5,2))
console.log(mul(4,4))
console.log(div(20,5))

function mudda() {
  console.log('Hallo Conny')
}
mudda()

function division(val1, val2, callbackFunction) {
  //Ergebnis der Division ermitteln
  const result = val1 / val2
  //aufruf der callbackFunktion
  callbackFunction(result)
}
//definition der callback funktion
function showResult(result){
  console.log(result)
}
//aufruf der division
division(10, 5, showResult)

//anonyme funktion, () => {}   is the same as function() {}
setTimeout( () => {
  console.log('Timeout!')
}, 3000)