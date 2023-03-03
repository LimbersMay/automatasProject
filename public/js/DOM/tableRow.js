
export const createTableRow = (elements) => {
    const tr = document.createElement('tr');
    elements.forEach((element) => {
        const td = document.createElement('td');
        td.textContent = element;
        tr.appendChild(td);
    });
    return tr;
}
