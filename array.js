//String array
let ninjas = ['shaun', 'mario', 'luigi'];
console.log(ninjas[1]);

ninjas[1] = 'ken';
console.log(ninjas[1]);
console.log(ninjas.length);

let result1 = ninjas.join(',');
console.log(result1);

let result2 = ninjas.indexOf('luigi');
console.log(result2);

let result3 = ninjas.concat(['ryu', 'chun li']);
console.log(result3);

let result4 = ninjas.push('mario');
console.log(result4);
console.log(ninjas);

let result5 = ninjas.pop();
console.log(result5);


//Number array
let age = [20, 25, 32, 36];
console.log(age[2]);
