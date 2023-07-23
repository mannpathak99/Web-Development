var randomNumber1 = Math.floor(Math.random()*6)+1; // 1 - 6
var randomDice1 = "dice"+ randomNumber1 +".png"; // dice1.png - dice6.png
var randomImgSrc1 = "images/"+ randomDice1; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);

var randomNumber2 = Math.floor(Math.random()*6)+1; // 1 - 6
var randomDice2 = "dice"+ randomNumber2 +".png"; // dice1.png - dice6.png
var randomImgSrc2 = "images/"+ randomDice2; // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
}
else{
    document.querySelector("h1").textContent = "🚩Draw🚩";
}