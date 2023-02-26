// //run bundle
// import {one, two} from './main';

// console.log(`${one} and ${two}`);


// //run bundle
// import {one as first} from './main';

// console.log(first);


// //run bundle
// import * as data from './main';

// console.log(`${data.one} and ${data.two}`);
// data.sayHi();


// //run bundle
// import {one, two} from './main';
// import sayHi from './main';

// console.log(`${one} and ${two}`);
// sayHi();


import {one, two} from './main.js';
import sayHi from './main.js';

console.log(`${one} and ${two}`);
sayHi();