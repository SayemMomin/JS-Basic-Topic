var inch = 144
var feet = inch / 12;

console.log(feet)

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var nanafeet = inchToFeet(156);
console.log(nanafeet);
var nanifeet = inchToFeet(200);
console.log(nanifeet);
var dadifeet = inchToFeet(300);
console.log(dadifeet);

var senior = [156, 200, 300]

var dadafeet = inchToFeet(senior[1]);
console.log(dadafeet)