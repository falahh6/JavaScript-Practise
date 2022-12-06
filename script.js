import U, {
    printName as PN,
    printPlace as PP
} from './mod.js';

const uu = new U('Falah', 'KAA');
console.log(uu);

PN('falah');
PP('Kumta');

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

let initialName = `falah`;
let dotName = `Mohammed ` + `${initialName}`;
console.log(dotName);

let messageOne = `this is a 
message
for template literals`;
console.log(messageOne);

// - eg
let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};

let {
    title,
    excerpt,
    body,
    tags
} = post;
// let postHTML
// document.body.innerHTML = `<h1>${title}</h1>
// <div>${excerpt}</div>\
// <div>${body}</div>
// <ul>
//     ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
// </ul>`

// -to fixed
let num = 989.5098;
let n = num.toFixed(10);
console.log(n);

//object literrals
let nameT = 'Sameer',
    major = 'Business Administration';
console.log(nameT, major);

let branch = {
    nameT: 'Sameer',
    major: 'Business Ad'
}
let college = 'AIMCA';
let branch1 = {
    [college + nameT]: 'Sameer',
    [college + 'Class']: 'BBA 3'
}
console.log(branch1)
console.log(branch);

let nameS = 'Sameer';
let collegeS = {
    [nameS]: 'AIMCA'
}
let prefix = 'Mohammed'
let namesT = {
    name1: [prefix + ' Mehran']
}
console.log(namesT);
console.log(collegeS);

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
//Array Destructuring
function getNumbers() {
    return [90, 80, 70];
}
let [one, two, three] = getNumbers();
console.log(three);

// - nested array Destructuring
let roommates = () => {
    return ['falah', 'Sameer', 'Kaif', 'Mehran', ['Ehraaz', 'Mehran']];
}
let [onee, twoo, threee, four, [oneOne, oneTwo]] = roommates();
console.log(oneOne);

// - returning multiple values 
let multiDestructuring = (a, b) => {
    return [
        a - b,
        a + b,
        a * b,
        a / b
    ]
}

let [sub, summ, mul, div] = multiDestructuring(90, 30);
console.log(sub, summ, mul, div);

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
// function myCallback() {
//     console.log("this is from callback");
// }

// function sum(a, b, call) {
//     let s = a + b;
//     console.log("sum : " + s);
//     call;
// }

// sum(9, 4, myCallback());

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

/// Async Await
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

//for...of 
// - for arrays
let numbers = [1, 2, 3, 4];
for (let n of numbers) {
    console.log(n);
}

// - for objects
let marks = [{
        subject: 'Java',
        mark: 90
    },
    {
        subject: 'Web Dev',
        mark: 60
    }
]

let summmm = 0;
for (const {
        mark
    } of marks) {
    summmm += mark;
}
console.log(summmm);

// - for strings
let str = 'This';
for (let ltr of str) {
    console.log(ltr);
}

// - for maps 
let colors = new Map();
colors.set('Red', '#rrrefy');
console.log(colors);

// - for objects
let nums = new Set([1, 2, 3]);
for (let num of nums) {
    console.log(num);
}

//Default Parameter
function defaultx(message = 'h1') {
    console.log(message);
}
defaultx();
defaultx('hello2');

//ex


//Rest parameters
function sum(...args) {
    let total = 0;
    for (let a of args) {
        total += a;
    }
    console.log(total)
}
sum(9, 8, 7, 6);

//ex

function testRest(...args) {
    console.log(args);
}
testRest('A', 'B', 9, 8, 7, 0, 5);

//spread operator
let ar1 = [1, 2, 3]
let ar2 = [...ar1, 4, 5, 6];
let ar3 = [...ar1, ...ar2];
console.log(ar2);
console.log(ar3);

//ex
function compare(a, b) {
    return a + b;
}

let cmp = compare(...[1, 2]);
console.log(cmp);

let chars = [...'ABCAD'];
console.log(chars);


let testChars = ['A', ...'DEL', 'F'];
console.log(testChars);