function spliceAfterDecimal(number) {
    let numStr = number.toString();

    let decimalIndex = numStr.indexOf('.');

    if (decimalIndex === -1) {
        return numStr;
    }

    return numStr.slice(0, decimalIndex + 5); 
}

const mysteryangle = prompt("What is the cos angle?")

let cos1 = Math.cos(mysteryangle*Math.PI/180);

let cos2 = spliceAfterDecimal(cos1) 

console.log(cos2); 

const hpy = prompt("What is hyp")

console.log(hpy * Number(cos2))