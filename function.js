

function sayEat(){
    console.log('ki khamu');
    console.log('mat khabi');
    console.log('bat ki khamu');
}
// function call
sayEat()
console.log('acca khaitasi');


function doubleIt(num){
    var result = num * 2;
    console.log(result)
}
// function call
doubleIt(5);



function doubleIt2(num){
    var result = num * 2;
    return result;
    // return role
}
 var first = doubleIt2(5);
 var second = doubleIt2(25);
 console.log(first + second)


 function add (num1, num2){
     var result = num1 + num2;
     return result;
 }
 // parameter pass
 var sum = add(25, 25)
 console.log(sum);


