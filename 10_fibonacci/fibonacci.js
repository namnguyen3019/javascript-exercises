const fibonacci = function(num) {
    if(num <= 0) return "OOPS";
    // 1, 1, 2, 3, 5, 8,
    if(num < 2) return 1;
    let num1 = 1; // 1th
    let num2 = 1;   // 2th
    for(let i=3; i <= num; i++){
        let num =  num1 + num2;
        num2 = num1;
        num1 = num;
    }

    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
