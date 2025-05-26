// Object thuan tuy
const username = {
    name: "A mao",
    age: 20
}
console.log(username);

// 2. Values type
// La kieu so day lmao

// 3. Reference type (Tham chieu)
let array_1 = [1,2,3,4,5];
let array_2 = array_1;
// Them phan tu
// C1: Truy cap phan tu can them chi so => gan gia tri
// array_2[5] = 6;
// C2: dung push (better)
array_2.push(6);

console.log("array_1", array_1);
console.log("array_2", array_2);

// 4. Duyet mang dung vong lap nhu bth
let numbers = [1,2,4,5,6];
let sum = 0;
let sumOdd = 0;
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum += numbers[i];
    if (numbers[i] % 2 == 1) {
        sumOdd += numbers[i];
    }
} 
console.log(sum);
console.log(sumOdd);

// for each
numbers.forEach(function (value, index) {
    // value: gia tri cua mang
    // index: la vi tri cua mang
    console.log("Gia tri cua mang: ", value);
    console.log("Vi tri cua mang: ", index);
});