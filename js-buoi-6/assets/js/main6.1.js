// xoa phan tu trong dom
// b1 truy cap phan tu trong dom
const children = document.querySelector('.children');
const parent = document.querySelector('.parent');

// b2.1 xoa phan tu trong dom

// parent.removeChild(children);

// b2.2
children.parentNode.removeChild(children);

// thay the phan tu trong dom
// b1 truy cap phan tu trong dom
let children_2 = document.querySelector('.children-2');
let parent_2 = document.querySelector('.parent-2');

let newElement = document.createElement('div');
newElement.innerHTML = 'New Element';

parent_2.replaceChild(newElement, children_2);