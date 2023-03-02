import {addSymbol} from "../api/backend-api.js";
import {getValidationError} from "../helpers/getValidation.js";

const addSymbolBtn = document.getElementById('add-symbol');

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

    // get message element
    const messageElement = document.getElementById('operation-message');

    if (!result.ok) {
        // set message
        messageElement.innerText = `Message: ${getValidationError(result.data)}`;
    }

    if (result.ok) {
        // set message
        messageElement.innerText = `Message: ${result.message}`;
    }
});
