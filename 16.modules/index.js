import date from './date.js';

const today = date(new Date());
console.log(today);
document.body.textContent = today;