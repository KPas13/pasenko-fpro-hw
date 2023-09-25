let table = document.querySelector('#table-body');

function generateTable(table) {
    let num = 1;
    for(let i = 0; i < 10; i++) {
        let tableRaw = document.createElement('tr');
        tableRaw.className = 'table-raw'
        for(let j = 0; j < 10; j++) {
            let tableCell = document.createElement('td');
            tableCell.className = 'table-cell';
            tableCell.textContent = num;
            tableRaw.append(tableCell);
            num++;
        }
        table.appendChild(tableRaw);
    }
}

generateTable(table);
