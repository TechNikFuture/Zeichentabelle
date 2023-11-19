function btn_1() {
  navigator.clipboard.writeText("➜ ");
}
function btn_2() {
  navigator.clipboard.writeText("²");
}
function btn_3() {
  navigator.clipboard.writeText("³");
}


function btn_shift_2() {
  navigator.clipboard.writeText("₂");
}
function btn_shift_3() {
  navigator.clipboard.writeText("₃");
}


function btn_4() {
  navigator.clipboard.writeText("< ");
}
function btn_5() {
  navigator.clipboard.writeText("> ");
}



shift_aktiv = false

window.addEventListener("keydown", key_event, false)

function key_event(key) {
       


    
    if (key.keyCode == "49") {
        btn_1()
      }
      
      if (key.keyCode == "50") {
        if (shift_aktiv === true) {
          btn_shift_2()
        } else {
        btn_2()
        }
        }
        
        if (key.keyCode == "51") {
          if (shift_aktiv === true) {
            btn_shift_3()
          } else {
          btn_3()
          }
        }
        
    if (key.keyCode == "52") {
      btn_4()
    }
            
    if (key.keyCode == "53") {
      btn_5()
    }
    

  if (key.keyCode == "16") {
    shift_aktiv = true
    setTimeout(function(){
      shift_aktiv = false
   }, 600);
  }



    }