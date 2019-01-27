katzDeliLine = []

function takeANumber(lineNumber, name) {
  for ( var i = 0; i < lineNumber.length; i++) { 
   console.log("Welcome, " + name[i] + ". You are number " + (lineNumber[i]+1) + " in line.")
}
}



function whileLoop(number) {
  while (number>0) 
  {console.log(number)
    number--
  }
  return 'done'
}