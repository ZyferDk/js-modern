const speak = (name = 'ajidk', time = 'morning', blank = null) => {
    console.log(`good ${time}! mr. ${name} selamat ${blank}`);
}

speak('suraji', 'afternoon', 'tinggal')

// const calcArea = (radius) => {
//     let area = 3.14 * radius ** 2;
//     return area;
// }

const calcArea = radius => 3.14 * radius ** 2

const greet = (wisata, alamat) => `selamat di ${wisata} di ${alamat}`;
const gt = greet('kebun buah', 'mangunan')

console.log(gt);

const area = calcArea(12)
console.log(area);

const bills = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

const bill = bills([10, 40], 5)
console.log(`total biaya : ${bill}`);

const people = ['ajidk', 'dozento', 'aviq', 'rifus'];

let html = ``;

let logPerson = (person, index) => {
    html += `<li>${index+=1} - hello ${person}</li>`;
}

people.forEach(logPerson);

const ul = document.querySelector('.people');

console.log(html);
ul.innerHTML = html;
