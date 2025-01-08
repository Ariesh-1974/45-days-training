// let input = prompt("Enter:"); 
// let Sum = 0;
// for (let i = 0; i < input.length; i++) {
//     Sum += input.charCodeAt(i);
// }
// console.log("total:",Sum); 

// let input1 = prompt("enter1:");
// let input2 = prompt("enter2:");
// console.log(input1.charAt(0).toUpperCase() + input1.slice(1),input2.charAt(0).toUpperCase() + input2.slice(1));
//task 1
function findlargestword(input){
    let store=input.split(' ');
    let longestword=0;
    for(let i=0;i < store.length;i++){
        if(store[i].length > longestword){
            longestword=store[i].length;
        }
    }
    console.log(longestword);
    
}
findlargestword('hello every one');
//task 2
function replace(input){
    input=input.split(' ');
    for(let i=0;i<input.length;i++){
        if(input.indexOf(input[i]) != i){
            input[i]='CHANGED';
        }
    }
    console.log(input.join(' '));
}
replace('John Mary John Alex Mary ');
//task 3
function replaceeven(words){
    words=words.split(' ');
    for(let i=0;i<words.length;i++){
        if(i%2==0){
            words[i]='EVEN';
        }
    }
    console.log(words.join(' '));
}
replaceeven("I am learning JavaScript every day");
//task 4
function remove(input) {
    let store = '';
    input = input.split('');

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[i + 1]) {
            store += input[i];  
        }
    }
    console.log(result); 
}
remove('Hello world');




