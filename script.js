
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