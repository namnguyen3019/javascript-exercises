const removeFromArray = function(arr, ...args) {
  let newArray = [];
  arr.forEach(x => {
    if(!args.includes(x)){
      newArray.push(x)
    }
  })

  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
