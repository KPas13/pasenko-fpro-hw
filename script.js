let hours = +prompt('Enter hours: ', 1);
let secondsOnHour = 3600;
let seconds = 0;
if(hours === 1) alert(`Seconds on ${hours} hour: ${secondsOnHour}`);
else {
    seconds = 3600 * hours;
    alert(`Seconds on ${hours} hours: ${seconds}`);
}





