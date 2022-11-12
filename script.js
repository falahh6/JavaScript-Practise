let firstName = 'Falah';
let lastName = 'S';

//Template Literals
console.log(`my last name is ${lastName}`)
let myname = `my first name is ${firstName}`;
console.log(myname);
document.getElementById('name').innerHTML = myname;


let a = 10;
let b = 2;

console.log(`sum = ${a+b}`);

let heading = 'These are Template Literals for li tags';

let lis = ['One', 'Two', 'Three'];
let html = `<h2>${heading}</h2><ul>`;

for (const x of lis) {
    html += `<li>${x}</li>`;
}
html = html + `</ul`;

document.querySelector('#temp').innerHTML = html;

//Ternary Operator , && , ||
let to = (a > b && a < b) ? 'yes' : 'no';
let to1 = (a > b || a < b) ? 'yes' : 'no';
console.log(to);
console.log(to1);

//Array map();
let arr = [1, 4, 9];
let squareRoot = arr.map(Math.sqrt);
console.log(squareRoot);

function sumFunc(num) {
    return num * 10;
}

let sumDis = arr.map(sumFunc);
console.log(sumDis);


let mapEx = arr.map(x => x * 2);
console.log(mapEx);


//Array filter();
// -arrow function
let names = ["Falah", "Arham", "Ashaar", "Syed Mohammed"];

let namesFiltered = names.filter(name => name.length > 5);
console.log(namesFiltered);

// -normal function
let namesFiltered1 = names.filter(function namesF(name) {
    return name.length > 6;
});

console.log(namesFiltered1);


function filterCondition(value) {
    return value > 50;
}
let valuesFilter = [1, 98, 3, 67, 88, 1].filter(filterCondition);
console.log(valuesFilter);


// Array reduce();
let numArray = [50, 4, 8, 5, 6];

function sum(previous, current) {
    return previous + current;
}
console.log(numArray.reduce(sum));

//Object shorthand : ES6

const namee = 'Ashaar';
const Role = 'Senior Dev Associate';
const Age = 21;

const Developer = {
    namee,
    Role,
    Age
}

console.log(Developer);


//Destructuring
const userDetails = {
    'name': 'Mohammed falah',
    'age': 20,
    'address': {
        'city': 'Kumta',
        'State': 'KA'
    }
}

const {
    name
} = userDetails;

console.log(name);
console.log(userDetails)

const {
    address
} = userDetails;
console.log(address);

function logDetails({
    name,
    age
}) {
    console.log(`${name} is ${age} years old`);
}

logDetails(userDetails);

const myDef = {
    'name': 'kaif',
    'age': 19
}

logDetails(myDef);


const getUsers = () => {
    return {
        'namex': 'herself',
        'age': 17
    }
}

const {
    namex,
    age
} = getUsers();

console.log(namex, age);

//Spread Operator in JS

const updatedDef = {
    ...myDef,
    age: 21,
    salary: 989898
};

console.log(updatedDef);

const mergedTwo = {
    ...userDetails,
    ...myDef
};
console.log(mergedTwo);


//Callbacks
function myCallback() {
    console.log("this is from callback");
}

function sum(a, b, call) {
    let s = a + b;
    console.log("sum : " + s);
    call;
}

sum(9, 4, myCallback());

//Promise
let promise = new Promise((resolve, reject) => {
    let phone = 'Android';
    if (phone === 'Android') {
        resolve('This Phone has Android Operating System');
    } else {
        reject('This Phone has iOS Operating System');
    }
})

promise.then(message => {
    console.log(message);
}).catch(message => {
    console.log(message);
})

///
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location == 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}
async function doWork() {
    try {
        const response = await makeRequest('Google');
        console.log('Response Recieved');
        const processedRequest = await processRequest(response);
        console.log(processedRequest)
    } catch (err) {
        console.log(err);
    }
}
doWork()