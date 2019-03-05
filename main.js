
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

let num = prompt("How old are you?");
let Num = parseInt(num);

const iAmThirsty = (num) => {
    
    if (num < 21){
       return "Drink some water";  
    }
    else if (num > 20 && num < 65){
        return "have a beer";
    }
    else {
        return "take a nap";
    }
};

printToDom("drinks", iAmThirsty(num));

console.log(1 === '1'); //false
//console.log(1 == '1'); //true 
console.log(1 !== '2'); //true

console.log('cats'.length); // how many chars
const quote = 'winter is coming';
console.log(quote.indexOf('is'));