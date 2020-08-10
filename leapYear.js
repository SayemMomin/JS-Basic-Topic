
// const year = 3565
// let remain = year % 4;

// if (remain == 0){
//     console.log('This is a leap year.')
// }
// else{
//     console.log('this is not a leap year')
// }

// function isLeapYear(year){
//     const remain = year % 4;
//     if (remain == 0){
//         return true;
//     }
//     else{
//     return false
//     }
// }

const check2000 = isLeapYear(2000);
console.log(check2000)

// 1700 is not leap year.
let check1700 = isLeapYear(1700);
console.log(check1700)

// leap year test
function isLeapYear(year){
    const remain = year % 4;

    if (remain == 0 && year%100 != 0  || year%400 == 0){
        return true;
    }
    else{
    return false
    }
}
let check1800 = isLeapYear(1800);
console.log(check1800)