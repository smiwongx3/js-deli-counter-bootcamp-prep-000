katzDeliLine = []

function takeANumber(lineNumber, name) {
  for ( var i = 0; i < lineNumber.length; i++) { 
   katzDeliLine.pop("Welcome, " + name[i] + ". You are number " + (lineNumber[i]+1) + " in line.")
}
  return katzDeliLine
}
