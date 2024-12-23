var timer = 60;
var scores = 0;
var hitrn = 0;

function makeBubble(){
  var clutter = "";
  for(i=1; i<=299; i++){
    var  rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
 
  }
  document.querySelector(".bpanel").innerHTML = clutter;
}

function incScore(){

scores += 10;
document.querySelector("#score").textContent = scores;
}

function getnewHit(){
 hitrn = Math.floor(Math.random()*10)
document.querySelector("#hits").textContent = hitrn;
}



function runTimer(){
   var timerint = setInterval(function(){
    if(timer > 0 ){
   timer--;
   document.querySelector("#countdown").textContent = timer;}
   else{
    clearInterval(timerint);

    document.querySelector(".bpanel").innerHTML ='GAME OVER <br> Your Score: ${scores}';
   }
  },1000);
}
document.querySelector(".bpanel").addEventListener("click",function(dets){
 var clicked = Number(dets.target.textContent);
if(clicked === hitrn){
  incScore();
  makeBubble();
  getnewHit();
}



})

makeBubble();
getnewHit();
runTimer();