
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const drinks = document.getElementById("drinks");
let action;

let num = prompt("How old are you?");
let Num = parseInt(num);

const iAmThirsty = (num) => {
    
    if (num < 21){

       action = "Drink some water"; 
       //drinks.innerHTML += action;
       return action;
    }
    else if (num > 20 && num < 65){

        action = "have a beer";
       // drinks.innerHTML += action;
        return action;
    }

    else {
        action = "take a nap";
       // drinks.innerHTML += action;
        return action;
    }
};

//iAmThirsty(num);

printToDom("drinks", iAmThirsty(num));

