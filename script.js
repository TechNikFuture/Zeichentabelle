const inputElement = document.querySelector("input");
const log = document.getElementById("input_anzeige");

inputElement.addEventListener("input", updateValue);

function updateValue(e) {
  const modifiedInput = checkIfContains(e.target.value);
  log.textContent = modifiedInput;
}

function copybtn() {
  const inputValue = document.getElementById("input").value;
  const result = checkIfContains(inputValue);
  // Hier solltest du `result` irgendwo verwenden, z.B. es in einem anderen Element anzeigen
}

function checkIfContains(inputValue) {
    let modifiedInput = inputValue;
  
    // Ersetze "->" durch "➜"
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













































function btn_1() {
  navigator.clipboard.writeText(`¹`);
  schließen();
}
function btn_2() {
  navigator.clipboard.writeText(`²`);
  schließen();
}
function btn_3() {
  navigator.clipboard.writeText(`³`);
  schließen();
}
function btn_4() {
  navigator.clipboard.writeText(`⁴`);
  schließen();
}
function btn_5() {
  navigator.clipboard.writeText(`⁵`);
  schließen();
}
function btn_plus_hoch() {
  navigator.clipboard.writeText(`⁺`);
  schließen();
}
function btn_minus_hoch() {
  navigator.clipboard.writeText(`⁻`);
  schließen();
}




function btn_Q() {
  navigator.clipboard.writeText(`₁`);
  schließen();
}
function btn_W() {
  navigator.clipboard.writeText(`₂`);
  schließen();
}
function btn_E() {
  navigator.clipboard.writeText(`₃`);
  schließen();
}
function btn_R() {
  navigator.clipboard.writeText(`₄`);
  schließen();
}
function btn_T() {
  navigator.clipboard.writeText(`₅`);
  schließen();
}
function btn_p_lus_tief() {
  navigator.clipboard.writeText(`₊`);
  schließen();
}
function btn_m_inus_tief() {
  navigator.clipboard.writeText(`₋`);
  schließen();
}




function btn_A() {
  navigator.clipboard.writeText(`➜ `);
  schließen();
}
function btn_S() {
  navigator.clipboard.writeText(`✓ `);
  schließen();
}




function btn_J() {
  navigator.clipboard.writeText(`α `);
  schließen();
}
function btn_K() {
  navigator.clipboard.writeText(`β `);
  schließen();
}






function btn_Y() {
  navigator.clipboard.writeText(`\\color{white}`);
  schließen();
}

function btn_X() {
  navigator.clipboard.writeText(`{}`);
  schließen();
}

function btn_C() {
  navigator.clipboard.writeText(`\\Delta`);
  schließen();
}

function btn_V() {
  navigator.clipboard.writeText(`\\:`);
  schließen();
}

function btn_B() {
  navigator.clipboard.writeText(`\\frac { 1 } { 1 }`);
  schließen();
}

function btn_N() {
  navigator.clipboard.writeText(`\\sqrt { a }`);
  schließen();
}



seite_nicht_schließen_boolean = 0

function nicht_schließen() {
  seite_nicht_schließen_boolean = 1
}


function schließen() {
  
  if (seite_nicht_schließen_boolean === 0){
    window.close();

  }
  
}






shift_aktiv = false

window.addEventListener(`keydown`, key_event, false)

function key_event(key) {
       

  if (key.keyCode == `32`) {nicht_schließen()}




    
    if (key.keyCode == `49`) {btn_1()}
      
    if (key.keyCode == `50`) {btn_2()}
        
    if (key.keyCode == `51`) {btn_3()}
        
    if (key.keyCode == `52`) {btn_4()}
            
    if (key.keyCode == `53`) {btn_5()}
            
    if (key.keyCode == `187`) {btn_plus_hoch()}
            
    if (key.keyCode == `189`) {btn_minus_hoch()}
            


    if (key.keyCode == `81`) {btn_Q()}

    if (key.keyCode == `87`) {btn_W()}
            
    if (key.keyCode == `69`) {btn_E()}
            
    if (key.keyCode == `82`) {btn_R()}
            
    if (key.keyCode == `84`) {btn_T()}
            
    if (key.keyCode == `80`) {btn_p_lus_tief()}
            
    if (key.keyCode == `77`) {btn_m_inus_tief()}
            



    if (key.keyCode == `65`) {btn_A()}
            
    if (key.keyCode == `83`) {btn_S()}



    if (key.keyCode == `74`) {btn_J()}
            
    if (key.keyCode == `75`) {btn_K()}



    if (key.keyCode == `89`) {btn_Y()}
            
    if (key.keyCode == `88`) {btn_X()}
    
    if (key.keyCode == `67`) {btn_C()}

    if (key.keyCode == `86`) {btn_V()}

    if (key.keyCode == `66`) {btn_B()}

    if (key.keyCode == `78`) {btn_N()}
    

    }