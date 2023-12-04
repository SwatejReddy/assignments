/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if(str1.length != str2.length){
    return false;
  }

  var obj1 = {};
  for(let i = 0; i < str1.length; i++){
    if (str1[i] in obj1){
      obj1[str1[i]] += 1;
    }
    else{
      obj1[str1[i]] = 1;
    }
  }

  var obj2 = {};
  for(let i = 0; i< str2.length; i++){
    if(str2[i] in obj2){
      obj2[str2[i]] += 1;
    }
    else{
      obj2[str2[i]] = 1;
    }
  }

  if (Object.keys(obj1).length != Object.keys(obj2).length){
  return false;
  }
  else{
    for(let i = 0; i < str1.length; i++){
      if(str1[i] in obj1 && str1[i] in obj2){
        if(obj1[str1[i]] == obj2[str1[i]]){
          continue;
        }
        else{
          return false;
        }
      }
      else{
        return false;
      }
    }
    return true;
  }
}

module.exports = isAnagram;
