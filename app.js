// import functions and grab DOM elements
const hornDropdownEl = document.getElementById('horn-dropdown');
const keyboardDropdownEl = document.getElementById('keyboard-dropdown');
const singerDropdownEl = document.getElementById('singer-dropdown');
const hornImageEl = document.getElementById('horn-image');
const keyboardImageEl = document.getElementById('keyboard-image');
const singerImageEl = document.getElementById('singer-image');
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
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
