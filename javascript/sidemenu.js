import { startMenu, toggleSideMenu, setMenuOption } from './menu-header.js';

const menuToggle = document.querySelector('#menu-button');
const invisibleDiv = document.querySelector('.div-menu-close');

startMenu();
invisibleDiv.addEventListener('click', toggleSideMenu);
menuToggle.addEventListener('click', toggleSideMenu);

const optionMenu = document.querySelectorAll('.side-menu-opt');

for (let i = 0; i < optionMenu.length; i++) {
    optionMenu[i].addEventListener('click', () => {
        setMenuOption(i-1);
    });
}