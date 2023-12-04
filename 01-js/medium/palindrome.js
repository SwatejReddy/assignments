/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length == 0 || str.length == 1){
    return true;
  }

  str = str.toLowerCase();

  var regexPattern = /[a-z0-9]+/g; //rempves all special chars.
  str = str.match(regexPattern); //returns all the words in an array after matching seperately.
  str = str.join(''); //joins all the words without spaces.


  console.log(str);

  i = 0;
  j = str.length - 1;
  while(i<j){
    if(str[i] != str[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome('Eva, can I see bees in a cave?'));

module.exports = isPalindrome;
