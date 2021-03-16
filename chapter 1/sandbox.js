// const para = document.querySelector('p');
// const para = document.querySelector('.error');
const para = document.querySelector('div.error');


// query multiple elements at once
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

const tags = document.getElementsByTagName('p')
const kelas = document.getElementsByClassName('error')

const title = document.getElementById('page-title');

console.log(title);
console.log(paras[1], errors[0]);