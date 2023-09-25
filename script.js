const array = [1, 2, [1, 2, 3, 4], 3];
function generateList(array) {
    let listUl = document.createElement('ul');
    array.forEach((item) => {
        let listLi = document.createElement('li');
        if (Array.isArray(item)) {
            let list2 = generateList(item);
            listLi.appendChild(list2);
        } else {
            listLi.textContent = item;
        }
        listUl.appendChild(listLi);
    });
    return listUl;
}

let numbersList = generateList(array);
document.body.appendChild(numbersList);

