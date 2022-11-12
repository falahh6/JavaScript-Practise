import {
    printUserName,
    printUserPlace
} from './script';
import User from '/script.js'
const uu = new User('falah', 22);
console.log(uu);


let xyz = printUserName('falah6');
console.log(xyz);

document.getElementById('xyz').innerHTML = xyz;