//Create smileys data
const smileys = [
    {
        smile: "😆",
        voteCount: 0,
    },
    {
        smile: "😅",
        voteCount: 0,
    },
    {
        smile: "😃",
        voteCount: 0,
    },
    {
        smile: "😈",
        voteCount: 0,
    },
    {
        smile: "😉",
        voteCount: 0,
    },
    {
        smile: "😉",
        voteCount: 0,
    },
];

//Get containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');
let deleteContainer = document.querySelector('#delete-container');
let addContainer = document.querySelector('#add-container');

//Update vote scores
function updateVotes() {
    voteContainer.innerHTML = "";

    smileys.forEach((item) => {
        let voteElement = document.createElement('div');
        voteElement.classList.add('vote-score');
        voteElement.textContent = item.voteCount;

        voteContainer.appendChild(voteElement);
    })
}

//Show smileys elements
function showSmiles() {
    smileys.forEach((item, index) => {
        let smileElement = document.createElement('div');
        smileElement.textContent = item.smile;

        smileElement.addEventListener('click', () => {
            smileys[index].voteCount++;
            updateVotes();
        })

        smileContainer.appendChild(smileElement);
    })
}

//Delete smileys
function deleteSmiles() {
    smileys.forEach((item, index) => {

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.textContent = '❌';

        deleteBtn.addEventListener('click', () => {
            smileContainer.innerHTML = '';
            smileys.splice(index, 1);
            showSmiles();

            voteContainer.innerHTML = '';
            updateVotes();

            deleteContainer.innerHTML = '';
            deleteSmiles();
        });
        deleteContainer.appendChild(deleteBtn);
    });
}

//Add smile
function addSmile() {
    let addBtn = document.createElement('button');
    addBtn.className = 'addBtn';
    addBtn.textContent = 'Add Smiley';

    addBtn.addEventListener('click', () => {
        smileContainer.innerHTML = '';
        deleteContainer.innerHTML = '';
        let userEmoji = prompt('Add smile', '👽');
        const newEmoji = {
            smile: userEmoji,
            voteCount: 0,
        };
        smileys.push(newEmoji);
        showSmiles();
        updateVotes();
        deleteSmiles();
    });

    addContainer.append(addBtn);
}


//Initialization
showSmiles();
updateVotes();
deleteSmiles();
addSmile();