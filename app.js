// import functions and grab DOM elements
const hornDropdownEl = document.getElementById('horn-dropdown');
const keyboardDropdownEl = document.getElementById('keyboard-dropdown');
const singerDropdownEl = document.getElementById('singer-dropdown');
const hornImgTag = document.getElementById('horn-image');
const keyboardImgTag = document.getElementById('keyboard-image');
const singerImgTag = document.getElementById('singer-image');
const timesChangedEl = document.getElementById('times-changed');
const sloganInputEl = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

// let state
let timesHornChanged = 0;
let timesKeyboardChanged = 0;
let timesSingerChanged = 0;
let slogans = ['lostlynx', 'buzzing rams horn', 'why would you choose that?'];

const slogansEl = document.getElementById('slogans');
// set event listeners 
sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInputEl.value;

    slogans.push(newSlogan);

    displaySlogans();

    sloganInputEl.value = '';
});

hornDropdownEl.addEventListener('change', () => {
    hornImgTag.src = `assets/${hornDropdownEl.value}.png`;

    timesHornChanged++;

    displayStats();
});

keyboardDropdownEl.addEventListener('change', () => {
    keyboardImgTag.src = `assets/${keyboardDropdownEl.value}.png`;

    timesKeyboardChanged++;

    displayStats();
});

singerDropdownEl.addEventListener('change', () => {
    singerImgTag.src = `assets/${singerDropdownEl.value}.png`;

    timesSingerChanged++;

    displayStats();
});
  // get user input

function displayStats() {
    timesChangedEl.textContent = `you changed the horns ${timesHornChanged} times, the keyboard ${timesKeyboardChanged} times, the singer ${timesSingerChanged} times. This is getting expensive.`;
}


function displaySlogans() {
    slogansEl.textContent = '';

    for (let slogan of slogans) {
        const sloganEl = document.createElement('p');

        sloganEl.textContent = slogan;
        sloganEl.classList.add('slogan');
        slogansEl.append(sloganEl);

    }
}

displaySlogans();