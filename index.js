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
  // a palindrome is two equivalent sides, one of which reversed
  // it matches from the outside in 
  // check first and last equal? if not return false, if true pass sub string
  // if string length less than 2 return true
  if (string.length < 2) return true
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.substring(1, string.length - 1))
  } else {
    return false
  }
}