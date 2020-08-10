function getFullName(firstName, lastName){
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

const name = getFullName('Hanif', 'Poribohon')
//console.log(name)


function getFullName2(firstName, lastName){
    console.log(arguments)
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}

const name2 = getFullName2('Hanif', 'songket', 'bin', 'mohammad', 'Poribohon')
console.log(name2)