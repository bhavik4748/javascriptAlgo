
import { testFunc } from './Hello.js';
import { reverseString } from './string/index.js';

testFunc();

const s = ['H', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s);