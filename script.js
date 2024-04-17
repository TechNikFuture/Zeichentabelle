const inputElement = document.querySelector("input");
const log = document.getElementById("input_anzeige");

inputElement.addEventListener("input", updateValue);

function updateValue(e) {
  const modifiedInput = checkIfContains(e.target.value);
  log.textContent = modifiedInput;
}

input_anzeige = document.getElementsByClassName('input_anzeige')



function copy_btn() {
  input_anzeige[0].classList.add('formatierung_zum_kopieren');

  const inputValue = document.getElementById("input").value;
  const result = checkIfContains(inputValue);
  navigator.clipboard.writeText(result);
}



function checkIfContains(inputValue) {
    let modifiedInput = inputValue;
  

    modifiedInput = modifiedInput.replace(/->/g, "➜");
  
    modifiedInput = replaceCharacters(modifiedInput, "_", true);
    modifiedInput = replaceCharacters(modifiedInput, "^", false);
  
    return modifiedInput;
  }
  

function replaceCharacters(inputValue, symbol, isSubscript) {
  let index = inputValue.indexOf(symbol);

  while (index !== -1) {
    if (index < inputValue.length - 1) {
      const charToReplace = inputValue.charAt(index + 1);
      const replacement = getReplacementChar(charToReplace, isSubscript);
      inputValue = inputValue.slice(0, index) + replacement + inputValue.slice(index + 2);
    }
    index = inputValue.indexOf(symbol, index + 1);
  }

  return inputValue;
}

function getReplacementChar(char, isSubscript) {
  const replacements = isSubscript ? {
    'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ', '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉', '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎'
  } : {
    'a': 'ᵃ', 'e': 'ᵉ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾'
  };
  return replacements[char] || char;
}















function btn_Y() {
  navigator.clipboard.writeText(`\\color{white}`);
}

function btn_X() {
  navigator.clipboard.writeText(`{}`);
}

function btn_C() {
  navigator.clipboard.writeText(`\\Delta`);
}

function btn_V() {
  navigator.clipboard.writeText(`\\:`);
}

function btn_B() {
  navigator.clipboard.writeText(`\\frac { 1 } { 1 }`);
}

function btn_N() {
  navigator.clipboard.writeText(`\\sqrt { a }`);
}












window.addEventListener(`keydown`, key_event, false)


function detect_if_input_is_focused() {
  activeElement = document.activeElement;
  input_is_focused = activeElement.toString().includes(`[object HTMLInputElement]`);
}


function key_event(key) {
  input_anzeige[0].classList.remove('formatierung_zum_kopieren');

  detect_if_input_is_focused()
  if (input_is_focused == false) {





    if (key.keyCode == `89`) {btn_Y()}
            
    if (key.keyCode == `88`) {btn_X()}
    
    if (key.keyCode == `67`) {btn_C()}

    if (key.keyCode == `86`) {btn_V()}

    if (key.keyCode == `66`) {btn_B()}

    if (key.keyCode == `78`) {btn_N()}
    
    


    
  }
}




function unfocus_on_enter(event) {
    // inputField = document.getElementById("input");
    // inputField.blur();

    if (event.key === 'Enter') {
      inputField = document.getElementById("input");
      inputField.blur();
      var input_anzeige_t = document.getElementById("input_anzeige");

      
      var selection = window.getSelection();  
      var range = document.createRange();      
      range.selectNodeContents(input_anzeige_t);  
      selection.removeAllRanges();  
      selection.addRange(range);  




    }

}
