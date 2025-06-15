const data = [
    {
        id: 1,
        name: "Product 1",
        imgSrc: "https://cdn.discordapp.com/attachments/1321095856853749800/1379013030582419507/Screenshot_20250602_144511_Weather.png?ex=683eb177&is=683d5ff7&hm=e59cd4ed5f3ae406747e5f73bb70aea6497731586dfb6648a52b17052948d899&",
    },
    {
        id: 2,
        name: "Product 2",
        imgSrc: "https://cdn.discordapp.com/attachments/1321095856853749800/1379013030582419507/Screenshot_20250602_144511_Weather.png?ex=683eb177&is=683d5ff7&hm=e59cd4ed5f3ae406747e5f73bb70aea6497731586dfb6648a52b17052948d899&",
    },
    {
        id: 3,
        name: "Product 3",
        imgSrc: "https://cdn.discordapp.com/attachments/1321095856853749800/1379013030582419507/Screenshot_20250602_144511_Weather.png?ex=683eb177&is=683d5ff7&hm=e59cd4ed5f3ae406747e5f73bb70aea6497731586dfb6648a52b17052948d899&",
    }
]

let rowProductJS = document.querySelector(".row-product-js");
// b2 dung vong lap de lap qua mang data
// in du lieu
let productHTML = ``;
data.forEach((item, index) => {
    productHTML += `<div class="col">
                <div class="product-item">
                    <img src="${item.imgSrc}" alt="${item.name}">
                    <h3>${item.name}</h3>
                </div>
            </div>`
});

rowProductJS.innerHTML = productHTML;