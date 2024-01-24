// setting up variables to store targets
const numBank = document.getElementById("numBank")
let numBankArr=[]
const odds = document.getElementById("odds")
const evens = document.getElementById("evens")

// document.addEventListener function, below is a different way to do the same as what is in html

function addNumber(num, event){
    event.preventDefault();
    console.log(num)
    // add number to array
    numBankArr.push(num)
    // update html numBank element with new array
    numBank.innerHTML=numBankArr.join(", ")
    // will keep you from losing numbers when another is input
}
// get number from input, add to number bank
    // edge case, make sure it recieves a number


// make functions to sort 1 and sort all 
let oddsArr=[]
let evensArr=[]

function sort1(){
// pop first num from array. decide if even, add to even, otherwise add to odd array
let firstNum = numBankArr.shift()
if (firstNum % 2 == 0){
    // ^ means its even
    evensArr.push(firstNum)
} else{
    oddsArr.push(firstNum)
    numBank.innerHTML=numBankArr.join(", ")

    odds.innerHTML=oddsArr.join(", ")
    evens.innerHTML=evensArr.join(", ")

}
}

function sortAll(){
    while (numBankArr.length > 0) {
        let currentNum = numBankArr.shift();
        if (currentNum % 2 == 0) {
            // if current number is even, add to even
            evensArr.push(currentNum);
        }
        else {
            // if current number is odd. add to odd
            oddsArr.push(currentNum);
        }
    }
    numBank.innerHTML=numBankArr.join(", ")

    odds.innerHTML=oddsArr.join(", ")
    evens.innerHTML=evensArr.join(", ")
}

// re display the updated numBank array with one less value
// function sortAll(){}


// for(let i=0; i<snacks.length; i++){
//     console.log(snacks[i].innerHTML)
// }

// for(let i=0; i<snacks.length; i++){
//     console.log(snacks[i].innerHTML)
// }

// when sorting it only takes one, and removes it from the bank


// break each problem into smaller subproblems
