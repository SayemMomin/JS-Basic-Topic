
var number = [22, 24, 26, 28];

 number.shift();
console.log(number);

number.unshift(20)
console.log(number)

var teaLine = ['kalam', 'jalam', 'balam', 'dalam', 'falam', 'galam'];
console.log(teaLine);
teaLine.shift()
console.log(teaLine);

teaLine.unshift('kalam');
console.log(teaLine);


var part = teaLine.slice(1);
console.log(part)

console.log(teaLine)


var check = teaLine.slice(0, -1);
console.log(check);

console.log(teaLine)