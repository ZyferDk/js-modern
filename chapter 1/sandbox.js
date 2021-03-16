// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('success');

const paras = document.querySelectorAll('p');
console.log(paras.classList);
paras.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    } else if (p.textContent.includes('success')) {
        p.classList.add('success');
    }
});

const div = document.querySelectorAll('h4');

div.forEach(h4 => {
    if (h4.textContent.includes('adk')) {
        h4.classList.add('success');
    } else if(h4.textContent.includes('success')) {
        h4.classList.add('error');
    }
    console.log(h4.classList);
})