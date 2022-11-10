let firstName = 'Falah';
let lastName = 'S';

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


let to = (a > b && a < b) ? 'yes' : 'no';

console.log(to);

let arr = [1, 4, 9];
let squareRoot = arr.map(Math.sqrt);
console.log(squareRoot);

function sumFunc(num) {
    return num * 10;
}

let sumDis = arr.map(sumFunc);
console.log(sumDis);