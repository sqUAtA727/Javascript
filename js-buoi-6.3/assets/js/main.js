// truy cap phan tu
let buttonChat = document.querySelector('.button-chat');
let close = document.querySelector('.close');
let contentHTML = document.querySelector('.content');


// click chat open popup
const handleOpenPopup = () => {
    contentHTML.style.bottom = '100px';
    contentHTML.style.transition = 'bottom 0.5s ease-in-out';
};

const handleClosePopup = () => {
    contentHTML.style.bottom = '-500px';
};

buttonChat.addEventListener('click', handleOpenPopup);
close.addEventListener('click', handleClosePopup);