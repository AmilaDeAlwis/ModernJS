//strings
console.log("Hello...");

let email1 = 'mario@gmail.com';
console.log(email1);

//string concatenation
let fName = 'AJ';
let lName = 'Shabeel';
let fullName = fName + '' + lName;
console.log(fullName);

//String Works
console.log(fullName[3]);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.indexOf('b'));

//String Methods
let email2 = 'mario@gmail.com';

let result1 = email2.lastIndexOf('i');
let result2 = email2.slice(2, 7);
let result3 = email2.substr(2, 7);
let result4 = email2.replace('m', 'w');
let result5 = email2.replace('a', 'o');

console.log(result1, result2, result3, result4, result5);

//Numbers
let radius = 10;
let pi = 3.14;

console.log(radius, pi);
 
let result6 = pi*radius**2;
console.log(result6);

let likes = 10;
likes = likes +1;
console.log(likes);

likes = 10;
likes += 10;
console.log(likes);

likes = 10;
likes = likes-1;
console.log(likes);

likes = 10;
likes++;
console.log(likes);

likes = 10;
likes--;
console.log(likes);

likes = 10;
let result7 = 'the boy has '+likes+' likes';
console.log(result7);

//NaN - Not a Number
console.log(5*'hello');