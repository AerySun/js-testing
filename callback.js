function division(vall1, vall2, callbackFunction) {
    //Ergebnis der Division ermitteln
    const result = vall1 / vall2
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
  
  //exercise 1 callback
  function addition(val1, val2, callback) {
    callback(val1 + val2)
  }
  
  function show(wert) {
    console.log(wert)
   }
   addition(10, 5, show)

   //modify exercise 1 
   function addition(val1, val2, callback) {
    callback(val1)
    callback(val2)
    callback(val1 + val2)

  }
  
  function show(wert) {
    console.log(wert)
   }
   addition(11, 5, show)

   //modify exercise 2 to an anonymous function
   function addition(val1, val2, callback) {
       callback(val1)
       callback(val2)
       callback(val1 + val2)
   }
   addition(5, 10, function (wert) {
       console.log(wert)
   })