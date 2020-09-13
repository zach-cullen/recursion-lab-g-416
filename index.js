// Code your solution here!
function printString(string) {
  console.log(string[0])
  
  let substring
  if (string.length > 1) {
    substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string) {
 
}
