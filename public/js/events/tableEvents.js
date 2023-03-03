import {getSymbols} from "../api/backend-api.js";
import {createTableRow} from "../DOM/tableRow.js";

const tableContent = document.getElementById('table-content');

(async () => {
    const response = await getSymbols();
    const { symbols }= response;

    symbols.forEach(symbol => {
        const { name, dataType, type, scope, line, value, father } = symbol;
        const tableRow = createTableRow([name, dataType, type, scope, line, value, father]);

        tableContent.appendChild(tableRow);
    });
})();
