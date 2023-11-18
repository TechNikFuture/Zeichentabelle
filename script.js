function btn_1() {
  navigator.clipboard.writeText("➜");
}
function btn_2() {
  navigator.clipboard.writeText("<");
}
function btn_3() {
  navigator.clipboard.writeText(">");
}








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
            




    }