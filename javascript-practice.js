//variables 
let name = "Radha";
const age = 19;
var college = "ANITS";
console.log(name);    // "Radha"
console.log(age);     // 19
console.log(college); // "ANITS"

//Operators
let x = 10, y = 5;
console.log(x + y);       // 15
console.log(x === y);     // false
console.log(x > y);       // true
console.log(true && false); // false
console.log(++x);         // 11

//Type conversion 
let a = "11";
console.log(a + 1);   // "111" 
console.log(a - 1);   // 10    
console.log(a * 2);   // 22   
console.log(a / 2);   // 5.5  

//Named function 
function greeting() {
  return "Hello";
}
console.log(greeting());

function greeting(){
   let name="Radha"
   return "Hello,"+name;  //"Hello, Radha"
}
console.log(greeting());

//Anonymous function 
let sayHi = function(name) {
  return Hi ${name};
};
console.log(sayHi("Radha")); // "Hi Radha"

//Arrow function
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // 20

//using return 
const multiply=function(a,b){return a*b;};
console.log(multiply(5,6)); //30

//For loop
for (let i = 0; i < 3; i++) {
  console.log("i =", i);
}


//While loop
let count = 0;
while (count < 3) {
  console.log("count =", count);
  count++;
}

// Do-while loop 
let num = 0;
do {
  console.log("num =", num);
  num++;
} while (num < 3);


// Arrays
let colors = ["red", "green", "blue"];
console.log(colors[0]);      // "red"
console.log(colors.length);  // 3

//Objects
let student = {
  name: "Radha",
  age: 19,
  course: "CSM"
};
console.log(student.name); // "Radha"

//Object manipulation 
student.age = 19;
student.college = "ANITS";
delete student.course;
console.log(student); // { name: "Radha", age: 19, college: "ANITS" }


// Object iteration using for..in
for (let key in student) {
  console.log(key ":" + student[key]);
}


//Prototype 
function person(name){
  this.name = name;
}
person.prototype.say = function(){
  console.log("Hello"+this.name);
}
let p = new person("Radha");
p.say();


//Arrow function 
const greetUser = name => Hi, {name};
console.log(greetUser("Radha")); // "Hi, Radha"

//Arrow destructing
let cities = ["Delhi", "Mumbai", "Chennai"];
let [city1, city2, city3] = cities;

console.log(city1); 
console.log(city2);  
console.log(city3); 

//Object destructing 
let settings = {
  volume: 70,
  brightness: 50,
  theme: "dark"
};

let { volume, theme } = settings;
console.log(volume); // 70
console.log(theme);  // "dark"
