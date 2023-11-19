
function btn_1() {
  navigator.clipboard.writeText("➜ ");
  window.close();
}
function btn_2() {
  navigator.clipboard.writeText("²");
  window.close();
}
function btn_3() {
  navigator.clipboard.writeText("³");
  window.close();
}
function btn_4() {
  navigator.clipboard.writeText("< ");
  window.close();
}
function btn_5() {
  navigator.clipboard.writeText("> ");
  window.close();
}



function btn_W() {
  navigator.clipboard.writeText("₂");
  window.close();
}
function btn_E() {
  navigator.clipboard.writeText("₃");
  window.close();
}



shift_aktiv = false

window.addEventListener("keydown", key_event, false)

function key_event(key) {
       


    
    if (key.keyCode == "49") {
      btn_1()
      }
      
    if (key.keyCode == "50") {
      btn_2()
      }
        
    if (key.keyCode == "51") {
      btn_3()
      }
        
    if (key.keyCode == "52") {
      btn_4()
    }
            
    if (key.keyCode == "53") {
      btn_5()
    }
            
    if (key.keyCode == "87") {
      btn_W()
    }
            
    if (key.keyCode == "69") {
      btn_E()
    }
    

    }