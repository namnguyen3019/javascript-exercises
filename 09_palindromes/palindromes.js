const palindromes = function (word) {
    let arr = word.toLowerCase().replace(/[^a-z]/g, "");
    let lo=0, hi= arr.length-1;
    while(lo <= hi){
      if(arr[lo] != arr[hi]) return false;
      lo++;
      hi--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
