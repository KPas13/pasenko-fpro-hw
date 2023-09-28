let firstPage = document.querySelector('#first-page');
let secondPage = document.querySelector('#second-page');

function linkProtocoleCheck(event) {
    let linkToPage = event.target.getAttribute('href');
    if (!linkToPage.startsWith('http://') || !linkToPage.startsWith('https://')) {
        linkToPage = "http://" + linkToPage;
    }
    window.open(linkToPage, '_blank');
}

firstPage.addEventListener('click', linkProtocoleCheck);
secondPage.addEventListener('click', linkProtocoleCheck);





