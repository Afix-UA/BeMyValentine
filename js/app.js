"use strict"

const buttonYes = document.querySelector('.button--yas');
const buttonNo = document.querySelector('.button--no');

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

buttonNo.addEventListener('click', function () {
    doYesMore();
});

buttonYes.addEventListener('click', function () {
    buttonYesPushed();
});

function doYesMore () {
    buttonNo.style.transform = "scale(0)";
    buttonYes.style.transform = "translate(50%) scale(1.5)"

}

function buttonYesPushed (){
    location.href = './page2.html';
}