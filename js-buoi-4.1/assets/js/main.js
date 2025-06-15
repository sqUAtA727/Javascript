// function
// map
const array_1 = [1, 2, 3, 4, 5];
array_1.map((item, index) => {
    console.log(`Item: ${item}, Index: ${index}`);
});

// filter
const array_2 = [1, 2, 3, 4, 5]; // so chan - iphone / so le - samsuck
const arrayFitlered = array_2.filter((item, index) => {
    return item % 2 == 1;
});

console.log(arrayFitlered);

// reduce
const array_3 = [1, 2, 3, 4, 5];
array_3.reduce((total, curr) => {
    console.log(`Total: ${total}, Current: ${curr}`);
    return total + curr;
}, 0); // dependency => Khoi tao gia tri ban dau thuong la bang 0

// find find index y het thoi
const array_4 = [
    {
    id: 1,
    name: 'Iphone 14 Pro Max',
    price: 3000
    }, 
    {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra',
    price: 2000
    }, 
    {
    id: 3,
    name: 'Xiaomi 13 Pro',
    price: 1500
    }, 
    {
    id: 4,
    name: 'Samsung Galaxy S23 Ultra',
    price: 2100
    }
];

const nameResult = array_4.find((object, index) => {
    console.log(object.name);
    console.log(object.id);
    return object.name == 'Samsung Galaxy S23 Ultra';
});
console.log(nameResult);

// phuong thuc object
const object_1 = {
    name: 'Iphone 14 Pro Max',
    price: 3000,
    color: 'Black',
    ram: 6,
    storage: 128
};
console.log(Object.keys(object_1)); 
console.log(Object.values(object_1)); 

// for in
let user = {
    id: 1,
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in user) {
    console.log(key);
}