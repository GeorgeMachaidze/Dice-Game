var randomNumber1 = Math.floor(Math.random() * 6)+1;
var image1 = document.getElementsByClassName("img1");
image1[0].setAttribute("src", "images/dice"+randomNumber1+".png")

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var image2 = document.getElementsByClassName("img2");
image2[0].setAttribute("src", "images/dice"+randomNumber2+".png")

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}else if (randomNumber2 = randomNumber1){
  document.querySelector("h1").innerHTML = "Draw"
}
