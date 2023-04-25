
let age: number = 39;

let firstName: string = "Brian"

let isTall: boolean = true;

let childNames: string [] = ["Billy","Joe","Bob"]
// console.log(age)
// console.log(`${firstName} is ${age} years old`) 

if (isTall) {
    // console.log("and tall")
} else {
    // console.log("short")
}

for (let i: number = 0; i< childNames.length ; i++) {
    // console.log(childNames[i])
}

enum taxForm {
    standerdTaxForm = "1040j",
    childTaxForm = "641",
    cryptTaxForm ="420Z"
}

// console.log(taxForm.standerdTaxForm)
// console.log(taxForm.cryptTaxForm)
// console.log(taxForm.standerdTaxForm)
// console.log(taxForm.childTaxForm)

let zipCode: string | number = 12345

// console.log(zipCode)

function sum( x: number, y: number): number {
    return x+y
}
let total: number = sum(6,7)
// console.log(total)

function debug(message: string) : void {
    // console.log(message)
}

debug("hello world")

interface person {
    firstName: string,
    age: number,
    children: string[],
    hasCertificate?: boolean,
}

let brian: person = {
    firstName: "me",
    age: 39,
    children: ["Bob","Billy"],
    hasCertificate: true
}

console.log(brian)