import {addSymbol, deleteSymbol, freeTable, getSymbol, updateSymbol} from "../api/backend-api.js";
import {getValidationError} from "../helpers/getValidation.js";

// ADD SYMBOL BUTTON
const addSymbolBtn = document.getElementById('add-symbol');

// get message element
const messageElement = document.getElementById('operation-message');

addSymbolBtn.addEventListener('click', async () => {

    // get values from form
    const name = document.getElementById('name').value;
    const dataType = document.getElementById('dataType').value;
    const type = document.getElementById('type').value;
    const scope = document.getElementById('scope').value;
    const line = document.getElementById('line').value;
    const value = document.getElementById('value').value;
    let father = document.getElementById('father').value;

    // if father is empty, set it to undefined
    father = father === '' ? undefined : father;

    const result = await addSymbol(name, dataType, type, scope, line, value, father);

    if (!result.ok) {
        // set message
        messageElement.innerText = `Message: ${getValidationError(result.data)}`;
    }

    if (result.ok) {
        // set message
        messageElement.innerText = `Message: ${result.message}`;
    }
});

// SEARCH SYMBOL BUTTON
const searchSymbolBtn = document.getElementById('lookUp');

const searchSymbol = async () => {
    const name = document.getElementById('name').value;
    const scope = document.getElementById('scope').value;

    const result = await getSymbol(name, scope);

    if (!result.ok) {
        // set message
        messageElement.innerText = `Message: ${getValidationError(result.message)}`;
        return;
    }

    const { type, dataType, line, value, father } = result.symbol;

    // assign values to form
    document.getElementById('dataType').value = dataType;
    document.getElementById('type').value = type;
    document.getElementById('line').value = line;
    document.getElementById('value').value = value;
    document.getElementById('father').value = father;
}

searchSymbolBtn.addEventListener('click', searchSymbol);

// DELETE SYMBOL BUTTON
const deleteSymbolBtn = document.getElementById('delete');
deleteSymbolBtn.addEventListener('click', async () => {

    const name = document.getElementById('name').value;
    const scope = document.getElementById('scope').value;

    const result = await deleteSymbol(name, scope);

    if (!result.ok) {
        // set message
        messageElement.innerText = `Message: ${getValidationError(result.message)}`;
        return;
    }

    // set message
    messageElement.innerText = `Message: ${result.message}`;
});

// FREE SYMBOL BUTTON
const freeSymbolBtn = document.getElementById('free');
freeSymbolBtn.addEventListener('click', async () => {

    const result = await freeTable();

    if (!result.ok) {
        // set message
        messageElement.innerText = `Message: ${getValidationError(result.message)}`;
        return;
    }

    // set message
    messageElement.innerText = `Message: ${result.message}`;
});

// UPDATE SYMBOL BUTTON
const updateSymbolBtn = document.getElementById('setSymbol');
updateSymbolBtn.addEventListener('click', async () => {

    const name = document.getElementById('name').value;
    const value = document.getElementById('value').value;
    const scope = document.getElementById('scope').value;

    const result = await updateSymbol(name, value, scope);

    if (!result.ok) {
        // set message
        messageElement.innerText = `Message: ${getValidationError(result.message)}`;
        return;
    }

    // set message
    messageElement.innerText = `Message: ${result.message}`;
});

// GET SYMBOL INFO BUTTON
const getSymbolInfoBtn = document.getElementById('getSymbol');
getSymbolInfoBtn.addEventListener('click', searchSymbol);
