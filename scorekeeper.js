var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.querySelector("#Reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var pInput = document.querySelector("#pInput");
var h1 = document.querySelector("h1");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
   if(!gameOver){
     p1score++;
     if(p1score === winningScore){
     	p1display.classList.add("winner");
     	gameOver = true;
     }
      p1display.textContent = p1score;
 }
});

p2button.addEventListener("click",function(){
	if(!gameOver){
   p2score++;
   if(p2score === winningScore){
   	gameOver = true;
   	p2display.classList.add("winner");
   }

    p2display.textContent = p2score;
}
});

resetButton.addEventListener("click", function(){
     p1score = 0;
     p2score = 0;
     p1display.textContent = 0;
     p2display.textContent = 0;
     p1display.classList.remove("winner");
     p2display.classList.remove("winner");
     gameOver = false;
});

numInput.addEventListener("change", function(){
     pInput.textContent = numInput.value;
     winningScore = Number(numInput.value);  
});
