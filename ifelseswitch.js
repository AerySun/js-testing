function test1() {
const val1 = 1
const val2 = '1'
const val3 = 1
//true bc == only compares the value, not the type.
console.log(val1 ==val2)
//false bc === compares the types too
 console.log(val1 === val2)
 //true bc type and value is the same
 console.log(val1 == val3)
 console.log(val1 === val3)
}
test1()

function division(counter, denominator) {
    //Division soll nur ausgefuehrt werden wenn der nenner ungleich 0 ist
    if(denominator !== 0) {
        //else wird ausgefuehrt wenn der nenner ungleich 0 ist
        return counter/denominator
    }
    //else wird ausgefuehrt wenn der Nenner 0 ist
    else{
        return "Divide by 0 is not possible"
    }
}
division()


