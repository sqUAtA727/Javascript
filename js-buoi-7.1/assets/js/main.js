// Khai nien lap trinh dong bo
// Tong thoi gian la tong thoi gian cua cac ham

// Bat dong bo la lam cung luc
// Tong thoi gian la bang cong viec dai nhat

// const fnA = () => {
//     setTimeout(() => {
//     console.log('fnA bat dau');
//     }, 3000);
// }

// const work1 = () => {
//     setTimeout(() => {
//         console.log('work1 bat dau');
//     }, 3000);
// }

// const work2 = () => {
//     setTimeout(() => {
//         console.log('work2 bat dau');
//     }, 5000);
// }

// const work3 = () => {
//     setTimeout(() => {
//         console.log('work3 bat dau');
//     }, 6000);
// }

// work1();
// work2();
// work3();   

// Dung callback de thuc hien dong bo

// const work1 = (name, callback) => {
//     console.log(`Bat dau cong viec`);

//     setTimeout(() => {
//         console.log(name);
//         callback();
//     }, 3000);
// }

// const work2 = ()=> {
//     console.log(`Bat dau cong viec 2`);
// }

// work1('work1', () => {
//     work2();
// });

// Dung promise de thuc hien dong bo
// let money = 45000;

// let buyPhone = new Promise((resolve, reject) => {
//     // console.log(resolve);
//     // console.log(reject);

//     if (money >= 35000) {
//         resolve('Mua dien thoai thanh cong');
//     } else {
//         reject('Khong du tien mua dien thoai');
//     }
// });

// let buyWatch = new Promise((resolve, reject) => {
//     if (money - 35000 >= 5000) {
//         resolve('Mua dong ho thanh cong');
//     } else {
//         reject('Khong du tien mua dong ho');
//     }
// });

// buyPhone.then((data) => {
//     console.log(data);
//     return buyWatch;
// }).catch((error) => {
//     console.log(error);
//     return;
// });

// buyWatch.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
//     return;
// });

const hello = async () => {
    return 'Hello World';
}

hello().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});