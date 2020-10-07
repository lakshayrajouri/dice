/********************************RIGHT********************************/
var randomNumber1 = Math.floor(Math.random()*6) + 1 ;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

// function diceLEFT() {
//
//                                 YOU CAN USE THIS OR JUST RAD THIS TO UNDERSTAND
//     if (randomNumber1 === 1) {
//         document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
//     }
//     if (randomNumber1 === 2) {
//         document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
//     }
//     if (randomNumber1 === 3) {
//         document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
//     }
//     if (randomNumber1 === 4) {
//         document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
//     }
//     if (randomNumber1 === 5) {
//         document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
//     }
//     if (randomNumber1 === 6) {
//         document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
//     }
//     console.log(randomNumber1)
// }
// diceLEFT()


/********************************LEFT********************************/
var randomNumber2 = Math.floor(Math.random()*6) + 1 ;

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


// function diceRIGHT() {
//
//                                   YOU CAN USE THIS OR JUST RAD THIS TO UNDERSTAND
//
//     if (randomNumber2 === 1) {
//         document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
//     }
//     if (randomNumber2 === 2) {
//         document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
//     }
//     if (randomNumber2 === 3) {
//         document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
//     }
//     if (randomNumber2 === 4) {
//         document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
//     }
//     if (randomNumber2 === 5) {
//         document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
//     }
//     if (randomNumber2 === 6) {
//         document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
//     }
//     console.log(randomNumber2)
// }
// diceRIGHT()

/********************************RESULT**********************************/

function result() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }else{
    document.querySelector("h1").innerHTML = "DRAW!";
  }
}
result()
