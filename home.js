console.log('hello');

//alert('hello this is sai');

// how to write a commeny inline

//variables
var b= 'smoothie';
console.log(b);

var somenumber=45;


console.log(somenumber);
//var age = prompt('what is your age?');

//document.getElementById('Sometext').innerHTML = age;
//Numbers in javascript
var num1= 10;
//num1=num1+1;
num1++;
console.log(num1);
//console.log(5*10);
//console.log(5/10);
num1--;
console.log(num1);
// Divide, multiply *,remainder %
console.log(num1%5);
console.log(num1/5);
// Increment/Decrement by any number you want
num1+=10;
console.log(num1);

/*Functions
1. Create a function
2. Call the function
*/
function fun(){
    alert('this is a function');
}
//call
//fun();
/* Let's create a function that take in a name 
 and says hello followed by your name
  For example 
  Name:"Anu"
  Return :"Hello Navya"
  
 function greeting(yourname){
    
    var result = 'hello'+' '+ yourname;
    console.log(result);
    
 }
 var name = prompt('What is your name'); 
 greeting(name);
 // How do arguments work in functions?
 // How do we add 2 numbers together in a function?
function sumnumbers(num1,num2){
  var result = num1+num2;
    console.log(num1+num2);
}
sumnumbers('hello','anu');
sumnumbers(10,'10');
*/

/*While loops
var num = 0;

while(num<100){
    num+=1;
    console.log(num);
}

// For loops
for(let num = 0; num<100;num++)
{
    console.log(num);
}


// Data types
let yourage=18;                        //number
let yourname = 'Bob';                 // String
let name = {first:'jane', last:'Doe'}; //object
let truth=false; //  Boolean
let groceries = ['apple','banana','orange']; // array
let random;//undefined
let nothing=null;// value null

// Strings in Javascript (Common methods)
let fruit ='banana , apple , orange';
let morefruits = 'banana\napple';   //New line
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // Split by a coma
console.log(fruit.split(''));  //Split by character

//Array 

let fruits=['banana','apple', 'orange','pineapples'];
fruits= new Array('banana','apple', 'orange','pineapples');
alert(fruits[2]);   //access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//array common methods
console.log('to string',fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits); // remove last element
console.log(fruits.push('blackberries'),fruits); //appends
console.log(fruits[4]); 
fruits[4]= 'new fruit';
//fruits[fruits.length]='new fruit'; // Same as push
console.log(fruits);
fruits.shift();   // remove first element
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables=['asparagus','tomato','boro'];
let allgroceries = fruits.concat(vegetables); // Combine arrays
console.log(allgroceries);
console.log(allgroceries.slice(1,4));
console.log(allgroceries.reverse());
console.log(allgroceries.sort());

let somenumbers = [5,4,3,5,6,3,7,23,234];
console.log(somenumbers.sort(function(a,b) {return a-b})); // for descending b-a

let emptyarray= new Array;
for(let num=0;num<10;num++){
    emptyarray.push(num);
}
console.log(emptyarray);
*/


//Objects in Javascript
//Dictionaries in python

let student={
    first:'Anu',
    last:'sai',
    age:'21',
   height:'168',
studentInfo: function(){
    return this.first+'\n'+this.last+ '\n'+ this.age;
}
};
//console.log(student.first)
//console.log(student.last)
//student.first='anusa';
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

//Conditionals, control flows (if else)
// 18 to 35 is my target demographic
//&& AND
//|| OR
var age= 45;
if((age>=18) && (age<=35)){
    status='target demo';
    console.log(status);
}
else{
    status='not my customer';
    console.log(status);
}

//Switch statements
//Differentiate between weekday vs. weekend
//day 0 sunday
// day 6 saturday
// day 4 thrusday weekday
switch(6){
    case 0:
        text='weekend';
        break;
    case 5:
        text='weekend';
        break;
    case 6:
        text='weekend';
        break;
        default:
            text='weekday';
}
console.log(text);