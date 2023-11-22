
function btn_1() {
  navigator.clipboard.writeText("¹");
  schließen();
}
function btn_2() {
  navigator.clipboard.writeText("²");
  schließen();
}
function btn_3() {
  navigator.clipboard.writeText("³");
  schließen();
}
function btn_4() {
  navigator.clipboard.writeText("⁴");
  schließen();
}
function btn_5() {
  navigator.clipboard.writeText("⁵");
  schließen();
}



function btn_Q() {
  navigator.clipboard.writeText("₁");
  schließen();
}
function btn_W() {
  navigator.clipboard.writeText("₂");
  schließen();
}
function btn_E() {
  navigator.clipboard.writeText("₃");
  schließen();
}
function btn_R() {
  navigator.clipboard.writeText("₄");
  schließen();
}
function btn_T() {
  navigator.clipboard.writeText("₅");
  schließen();
}


function btn_A() {
  navigator.clipboard.writeText("➜ ");
  schließen();
}
function btn_S() {
  navigator.clipboard.writeText("∞ ");
  schließen();
}

function schließen() {
  window.close();
}





shift_aktiv = false

window.addEventListener("keydown", key_event, false)

function key_event(key) {
       


    
    if (key.keyCode == "49") {btn_1()}
      
    if (key.keyCode == "50") {btn_2()}
        
    if (key.keyCode == "51") {btn_3()}
        
    if (key.keyCode == "52") {btn_4()}
            
    if (key.keyCode == "53") {btn_5()}
            


    if (key.keyCode == "81") {btn_Q()}

    if (key.keyCode == "87") {btn_W()}
            
    if (key.keyCode == "69") {btn_E()}
            
    if (key.keyCode == "82") {btn_R()}
            
    if (key.keyCode == "84") {btn_T()}
            


    if (key.keyCode == "65") {btn_A()}
            
    if (key.keyCode == "83") {btn_S()}
    

    }