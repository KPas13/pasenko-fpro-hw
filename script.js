let input = document.querySelector('#text-fold');
console.log(input);
let wrapper = document.querySelector('#main-wrapper');

let newDiv = document.createElement('div');
newDiv.style.width = '100px';
newDiv.style.height = '100px';
newDiv.style.backgroundColor = '#7091F5';

input.addEventListener('focus', () => {
    wrapper.appendChild(newDiv);
});

input.addEventListener('focusout', () => {
    wrapper.removeChild(newDiv);
});

// input.addEventListener('mouseover', () => {
//     wrapper.appendChild(newDiv);
// });
//
// input.addEventListener('mouseout', () => {
//     wrapper.removeChild(newDiv);
// });



