
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

//let num = prompt("How old are you?");
//let Num = parseInt(num);

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

printToDom("drinks", iAmThirsty(32));

console.log(1 === '1'); //false
//console.log(1 == '1'); //true 
console.log(1 !== '2'); //true

console.log('cats'.length); // how many chars
const quote = 'winter is coming';
console.log(quote.indexOf('is')); // returns 7
//console.log(indexOf('bunny')); // returns -1

const catName = () => {
    return 'killer';
}

const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep'
    }
};

//dot notation
console.log(bucketOCats.cat2);

//bracket notation
console.log(bucketOCats['cat2']);

console.log(bucketOCats.cat4.water);

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life); //42

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
  }

  let eom = "employee_of_the_month";

  let first = `<p>1. Our company's lawyer is ${employee.name}</p>`;
  let second = `<p>2. Jeff was hired on ${employee['hire_date']}</p>`;
  employee.vacation_days = 20;
  let third = `<p>3. ${employee.vacation_days}</p>`;
  employee[eom] = false;
  let fourth = `<p>4. True or false, Jeff is employee of the month? ${employee.employee_of_the_month}</p>`;

  printToDom('employee', first);
  printToDom('employee', second);
  printToDom('employee', third);
  printToDom('employee', fourth);