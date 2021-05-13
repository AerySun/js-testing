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
  const firstName = 'Jannik'
  const lastName = 'Welter'
  console.log(`Hallo ${firstName} ${lastName}`)
}
code32()

function code33() {
 let firstName = 'jannix'
 const lastName = 'Welter'
 const template = `Hallo ${firstName} ${lastName}`
 console.log(template)
 firstName = 'Jannixxxxxx'
 console.log(template)
}
code33()