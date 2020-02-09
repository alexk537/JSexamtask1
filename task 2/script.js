function isPalindrome(str) {
    var strLen = str.length;
    var result = '';
    for (var i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) { 
        result = 'yes';
      } else {
        result = 'no';
        return result;
      }
    }
    return result;
  }