function evenodd(input){
    for(let i=0;i<input.length;i++)
    {
        if(input[i]%2==0){
            console.log("even");
        }
        else{
            console.log("odd");
        }
    }
}

evenodd([10,25,45,55]);

function number(size){
    for(let i=1;i<=size;i++){
        console.log(i);
    }
}
number(10);

function test(){
    for(let i=0;i<30;i++){
        let sums=i*3;
        console.log(sums);
    }
}

test();
function sums(number){
    let sum=0;
    for(i=1;i<=number;i++){
         sum+= i; 
    }
    console.log(sum);
}
sums(100);

function largestnumber(data){
    let largest;
    largest=data[0];    
    for(let i=1;i<data.length;i++){
        if(data[i]>largest){
            largest=data[i];
        }
        console.log(largest);
    }
}
function primenumber(input){
    if(input>1){
        for(let i=2;i<input;i++){
            if(input%i==0){
               console.log("not a prime");
               break;
            }
        }
        console.log("prime");
    }
}
largestnumber([1,5,3,9,2]);

function vowelcount(word){
    let count=0;
    let vowel="aeiou";
    for(let i=0;i<word.length;i++){
        if(vowel.includes(word[i])){
            count++;
        }
    }
    console.log(count);
}
vowelcount('ariesh');

function starprint(row){
    for(let i=1;i<=row;i++){
        let star="*";
        console.log(star.repeat(i));
    }
}
starprint(5);

function fizzBuzz(input){
    for(let i=1;i<=input;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }
        else if(i%3==0){
            console.log("Fizz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    } 
}
fizzBuzz(50);

function reverse(word){
    let rev='';
    for(let i=word.length-1;i>=0;i--){
        rev += word[i];  
    }
    console.log(rev);
}
reverse('ariesh');

function primenumber(input){
    if(input>1){
        for(let i=2;i<input;i++){
            if(input%i==0){
               console.log("not a prime");
               break;
            }
        }
        console.log("prime");
    }
}
primenumber(3);

const arr=[{
    name:'Ariesh',
    age:21,
    gmail:"arieshgk1985@gmail.com",
    city:"salem",
    pincode:636502
}]
arr[0].age=20;
console.log(arr[0]);