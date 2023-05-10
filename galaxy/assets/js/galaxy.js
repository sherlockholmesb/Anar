let box=document.querySelector(".box");
let daire= document.querySelector(".daire");

let speed=5;
let isS ]r4;2]








ftPressing
window.addEventListener("keydown",function(e){
    if (e.keyCode==39  ) {
        if(daire.offsetLeft+speed <= box.offsetWidth-daire.offsetWidth){
            daire.style.left=daire.offsetLeft+speed+"px";
        }
        
       
    }
    if (e.keyCode==37) {
         if(daire.offsetLeft-speed >= -30){
              daire.style.left=daire.offsetLeft-speed+"px";
         }
         else{
            daire.style.left=daire.offsetWidth+box.offsetWidth+"px"
         }
      
    }
    if (e.keyCode==38) {
          if(daire.offsetTop-speed >= 0){
            daire.style.top=daire.offsetTop-speed+"px";
          }
        
    }
    if (e.keyCode==40) {

        if(daire.offsetTop+speed <= box.offsetHeight-daire.offsetHeight){
             daire.style.top=daire.offsetTop+speed+"px";
        }
       
    }
})