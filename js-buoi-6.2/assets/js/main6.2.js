const show = () => {
    alert("Hello, mom!");
}

// better way
// b1 truy cap phan tu
let summitButton = document.querySelector(".button-summit");

// b2 gan su kien
summitButton.addEventListener("click", () => {
    alert("Hello, World!");
});

const dbColor = () => {
    summitButton.style.backgroundColor = "red";
    summitButton.style.color = "white";
};

summitButton.addEventListener("mouseover", dbColor);