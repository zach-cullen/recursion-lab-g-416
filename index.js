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
  if (index === 0) return array[0]
  return addUpTo(array.slice(0, index), index - 1) + array[index]
} 

function maxOf(array) {
  // if array length is 1 return array[0]
  // check first and last and return sub array minus the lesser 
  // if they are equal return minus first
  // return sub array removing smallest
  if (array.length === 1) {
    return array[0]
  }
  let first = array[0]
  let last = array[array.length - 1]
  if (first < last) {
    return maxOf(array.slice(1))
  } else {
    return maxOf(array.slice(0, array.length - 2))
  }
}