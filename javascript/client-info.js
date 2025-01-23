import { sendHTTPRequest } from './http-requests.js';
import { setRegisterId } from './tables.js';

const inputId = document.querySelector('#id-cliente');
const inputName = document.querySelector('#nombre');
const inputLastname = document.querySelector('#apellido');
const inputTelefono = document.querySelector('#telefono');
const inputMunicipio = document.querySelector('#municipio');
const inputDepartamento = document.querySelector('#departamento');
const inputPais = document.querySelector('#pais');
const inputDireccion = document.querySelector('#direccion');
const btnSave = document.querySelector('.frm-btn-submit');

async function getClientData(id) {
    const url = 'https://jahairastore.vercel.app/api/v1/clients' + '/' + id
    const client = await sendHTTPRequest('GET', url);
    console.log('cliente', client);
    return client;
}

async function writeInputs(id) {
    const client = await getClientData(id);

    inputId.value = client.id;
    inputName.value = client.name;
    inputLastname.value = client.lastname;
    inputTelefono.value = client.phone;
    inputMunicipio.value = client.municipio;
    inputDepartamento.value = client.departamento;
    inputPais.value = client.country;
    inputDireccion.value = client.address;
}

async function createUser() {
    console.log('create user');
    let client = {
        name: inputName.value,
        lastname: inputLastname.value,
        phone: inputTelefono.value,
        municipio: inputMunicipio.value,
        departamento: inputDepartamento.value,
        country: inputPais.value,
        address: inputDireccion.value
    }
    console.log(client);

    await sendHTTPRequest('POST', 'https://jahairastore.vercel.app/api/v1/clients', client);
}

async function editUser(id) {
    console.log('edit user');
    let client = {
        name: inputName.value,
        lastname: inputLastname.value,
        phone: inputTelefono.value,
        municipio: inputMunicipio.value,
        departamento: inputDepartamento.value,
        country: inputPais.value,
        address: inputDireccion.value
    }
    console.log(client);

    await sendHTTPRequest('PATCH', 'https://jahairastore.vercel.app/api/v1/clients/' + id, client);
}

let registerIdGlobal = localStorage.getItem('registerIdGlobal');
console.log('id', registerIdGlobal);

if (registerIdGlobal > -1) {
    writeInputs(registerIdGlobal);
}

btnSave.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputId === "") {
        createUser();
    } else {
        editUser(registerIdGlobal);
    }
});

