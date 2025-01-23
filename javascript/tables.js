import { sideMenuOptions } from './object-data.js';
let menuOptionGlobal = localStorage.getItem("menuOptionGlobal");

export function getTableRows(data) {

    //get option object from object-data
    let menuObject = sideMenuOptions[menuOptionGlobal];
    let newRegisterLink = menuObject.newRegisterLink;

    let dataColumns = Object.keys(data[0]);

    const tableBody = document.querySelector('.tbl-rows');
    let tags = "";
    
    data.map(d => {
        tags += `
            <tr id="${d[dataColumns[menuObject.columns[0]]]}">
                <td>${d[dataColumns[menuObject.columns[0]]]}</td>
                <td>${d[dataColumns[menuObject.columns[1]]]}</td>
                <td>
                    <button class="tbl-options-btn"></button>
                    <menu class="flex tbl-menu">
                        <a href="${newRegisterLink}">Editar</a>
                        <a href="">Pedidos</a>
                        <a href="">Recibos</a>
                        <a href="">Crear pedido</a>
                    </menu>
                </td>
            </tr>
        `
    });

    tableBody.innerHTML = tags;
}

//Display options menu on tables
export function displayTableMenu() {
    const optionsMenuBtn = document.querySelectorAll('.tbl-options-btn');
    optionsMenuBtn.forEach(button => {
        button.addEventListener('click', (event) => {
            const menu = button.nextElementSibling;
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';

            //Position the menu
            const buttonRect = button.getBoundingClientRect();
            menu.style.left = buttonRect.right - 250 + "px";
            menu.style.top = buttonRect.top + "px";

            //Close other open menus
            optionsMenuBtn.forEach(otherButton => {
                if(otherButton !== button){
                    otherButton.nextElementSibling.style.display = 'none';
                }
            })
        });
    });

    //Close menus when clicking outside
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.tbl-options-btn')) {
            const menus = document.querySelectorAll('.tbl-menu');
            menus.forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
}

export function setRegisterId(id) {
    localStorage.setItem('registerIdGlobal', id);
}

export function getTableRowId() {
    const tblTd = document.querySelector('.tbl-rows');
    tblTd.addEventListener('click', (event) => {
        if (event.target.tagName === "A") {
            const registerId = event.target.closest('tr').id;
            console.log('rowId', registerId);
            setRegisterId(registerId);
        }
    });
}