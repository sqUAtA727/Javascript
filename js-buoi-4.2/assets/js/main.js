console.log("Hello, world!");

// Try cap phan tu theo id
let title_1 = document.getElementById("title_1");
console.log(title_1);
title_1.style.color = "red";

// theo class
const title_2 = document.getElementsByClassName("title_2");
console.log(title_2);
for (let i = 0; i < title_2.length; i++) {
    title_2[i].style.color = "blue";
    title_2[i].style.backgroundColor = "yellow";
}

// theo tag
const tag_h3 = document.getElementsByTagName("h3");
console.log(tag_h3);
for (let i = 0; i < tag_h3.length; i++) {
    tag_h3[i].style.color = "magenta";
    tag_h3[i].style.backgroundColor = "purple";
}