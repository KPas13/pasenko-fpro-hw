let birthYear = +prompt("Введіть рік народження?", "2004");
let age = 0;
if (!birthYear){
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
    age = "невідомий";
}
else{
    let year = new Date();
    year = year.getFullYear();

    while(birthYear > year){
        birthYear = +prompt("Напишіть правильний рік", "2004");
    }

    age = year - birthYear;
}

let city = prompt("Введіть місто в якому ви живете?", "Черкаси");
if (!city){
    alert("Шкода, що Ви не захотіли ввести своє місто проживання.");
    city = "X";
}


switch (city){
    case "Київ":
        alert(`Ваш вік: ${age}` + '\n' + 'Ти живеш у столиці України.');
        break;
    case "Вашингтон":
        alert(`Ваш вік: ${age}` + '\n' + 'Ти живеш у столиці США.');
        break;
    case "Лондон":
        alert(`Ваш вік: ${age}` + '\n' + 'Ти живеш у столиці Англії.');
        break;
    default:
        alert(`Ваш вік: ${age}` + '\n' + `Ти живеш у місті ${city}`);
        break;
}

let favSport = prompt("Який ваш улюблений вид спорту?", "Волейбол");
if(!favSport)
    alert("Шкода, що Ви не захотіли ввести свій улюбленний вид спорту");

switch (favSport){
    case "Волейбол":
        alert("Круто! Хочеш стати Юджі Нішіда?");
        break;
    case "Баскетбол":
        alert("Круто! Хочеш стати Кобі Брайнтом?");
        break;
    case "Кіберспорт":
        alert("Круто! Хочеш стати Данилом Тесленко?");
        break;
    default:
        alert("Круто!");
        break;
}



