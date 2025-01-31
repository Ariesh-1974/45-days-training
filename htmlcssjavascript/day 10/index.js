
let arr= [1, 2, 3, 4, 4, 5, 6, 2];
let output=arr.filter((item,i) => arr.indexOf(item)===i);
console.log(output);
