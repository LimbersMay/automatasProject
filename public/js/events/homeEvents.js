import {addSymbol, deleteSymbol, getSymbol} from "../api/backend-api.js";
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
searchSymbolBtn.addEventListener('click', async () => {
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

    console.log(result);
});

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

