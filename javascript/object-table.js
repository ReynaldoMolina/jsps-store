import { sideMenuOptions } from './object-data.js';
import { getTableRows, displayTableMenu, getTableRowId } from './tables.js';
import { sendHTTPRequest } from './http-requests.js';

function loadPageAccordingToMenuOption(menuOption) {
    //get option object from object-data
    let menuObject = sideMenuOptions[menuOption];

    //assign page title
    const pageTitle = document.querySelector('#page-title');
    pageTitle.innerHTML = menuObject.name;

    //assign href to new button
    let newButton = document.querySelector('#new-register');
    newButton.setAttribute('href', menuObject.newRegisterLink);

    //fetch data from api
    async function getData() {
        try {
            let data = await sendHTTPRequest("GET", menuObject.url);
            console.log(data);
            //call function to load respective table
            getTableRows(data);
            displayTableMenu();
            getTableRowId();
        } catch (error) {
            //call function to load respective table
            getTableRows(menuObject.url);
            displayTableMenu();
        }
    }

    getData();
} 

let menuOptionGlobal = localStorage.getItem("menuOptionGlobal");
loadPageAccordingToMenuOption(menuOptionGlobal);