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

function addUpTo(array, index) {
  // start with sub index of array to index
  // return index as index - 1
  // return addUpTo sub index + array[index]
  // if index is zero return array[0]
  if (index === 0) return array[0]
  return addUpTo(array.slice(0, index - 1)) + array[index]
} 