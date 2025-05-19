// console.log("abc xyz klhga");

// Khai báo biến - var/let/const
// const - bien khong duoc thay doi
// let - gan lai duoc gia tri => dung nhieu
// var - gan lai duoc gia tri but it su dung - hosting

var name = "oh hey";
name = "heyy"
console.log(name);

let age = "50";
age = "30";
console.log(age);

const email = "kjslhfluia@gmail.com";
// email = "123";
console.log(email);

// Quy tac dat ten bien
const homeWork = "Lam nhieu bai vao";
console.log(homeWork);

// Kiem tra kieu du lieu cua bien
const count = 30;
typeof (count);
console.log(typeof (count));

// Pham vi bien
// global - nam ngoai cac block { ... } bat ky dau trong du an deu dung duoc
let test = "example.test";
console.log(test);

// local - function
function hello() {
    // Va do la cach khai bao function thua tat ca moi nguoi
    console.log("Hello, world");
    console.log(test);
    company = "Tech";
    console.log(company);
}

// Thuc hien belike
hello();
console.log(company);

// Kieu du lieu
const date = "202413003 \"00:00";
console.log(date);

// back-tick
const blogContent = `u mai ka hkghs"'/\?`;
console.log(blogContent);

// Cong chuoi
const firstName = `Yo`;
const lastName = `Mom`;
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;
console.log(fullName);