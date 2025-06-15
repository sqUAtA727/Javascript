const title_1 = document.getElementById("title_1");
console.log(title_1);

// Truy cap theo querySelector
const title_2 = document.querySelector(".title_2");
console.log(title_2);

// Truy cap theo querySelectorAll
const title_3 = document.querySelectorAll(".title_3");
console.log(title_3);

// Cac cach truy cap phan tu
// 1. Truy cao phan tu cha thong qua phan tu con
const para_1 = document.querySelector(".para_1");
console.log(para_1);
// Thong qua Node.parentNode
const parent_1 = para_1.parentNode;
console.log(parent_1);

// 2. Truy cap phan tu thong qua phan tu hien tai
const box_2 = document.querySelector(".box_2");
console.log(box_2);
let childBox_2 = box_2.childNodes;
console.log('childBox_2', childBox_2);

// Lay noi dung html cua phan tu
let para_3 = document.querySelector(".para_3");
let content_3 = para_3.innerHTML;
console.log(content_3);
// Chinh sua noi dung html cua phan tu
para_3.innerHTML = "oi";

// THem phan tu vao trong phan tu
// b1 dung js => the ao (Chi co moi, khong co noi dung) => cu phap
// b2 gan noi dung (Server tra ve) => cu phap
let box_3 = document.querySelector(".box_3");
let newThing = document.createElement("div");
newThing.innerHTML = "Day la noi dung moi";
box_3.appendChild(newThing);