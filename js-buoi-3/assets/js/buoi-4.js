// Tao object

const product = {
    title: "san pham 1",
    price : 20000,
    rating: 200
};
console.log(product);

// c1: truy cập như với array thông thường không dùng đâu lmao
console.log(product["title"]);
// c2: goi giong function on hon nhieu
console.log(product.title);

// Them phan tu moi
product.price = 100000;
console.log(product.price);

// Xoa phan tu
delete product.rating;

