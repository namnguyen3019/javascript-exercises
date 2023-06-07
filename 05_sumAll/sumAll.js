const sumAll = function(a, b) {
  if(a < 0 || b < 0) return "ERROR";
  if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  let sum = 0;
  if(a > b){
    let temp = a;
    a = b;
    b = temp;
  }
  if(a < b){
    for(let i=a; i <=b; i++){
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
