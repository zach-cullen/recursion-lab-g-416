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
  if (string.length === 0) {
    return string
  }
  return reverseString(string.substring(1, string.length)) + string[0]
}

function isPalindrome(string) {
  if (string.length < 2) return true
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.substring(1, string.length - 1))
  } else {
    return false
  }
}