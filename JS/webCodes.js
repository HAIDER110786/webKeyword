const specialEffects = document.querySelector('.specialEffects');
const input = document.querySelector('.inputDiv input');
const inputArray = [];
const specialCode = 'specialeffect';

input.addEventListener('keyup',checkForCode);

function checkForCode(e){
    inputArray.push(e.key);
    inputArray.splice(-inputArray.length-1, inputArray.length - specialCode.length);
    if(inputArray.join('') === specialCode){
        cornify_add();
    }
}