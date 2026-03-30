const buttons = document.querySelectorAll(".pickbutton");
const resultDisplay=document.getElementById("result");
buttons.forEach((button,index) =>{
  button.addEventListener("click", () =>{
   handleClick(button,index);
  });
});

let currentPlayer = "X";
let activeGame = true;

function handleClick(button){
  if (!activeGame) {
    return;
  };

  if(button.textContent === ""){
    button.textContent = currentPlayer; 

    if (checkWin()) {
      resultDisplay.textContent= currentPlayer + " wins!";
      activeGame = false;
      return;
    }
    if (checkDraw()) {
      resultDisplay.textContent = "It's a draw!";
      activeGame = false;
      return;
    };
    currentPlayer = currentPlayer === "X" ? "O" : "X";

};
}; 

const winningCombinations = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
];
function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return buttons[index].textContent === currentPlayer;
    });
  });
};
function checkDraw() {
  return [...buttons].every(button => button.textContent !== "");
}


const reset=document.getElementById("resetButton");
function resetGame(){
  buttons.forEach(button => button.textContent = "");
  currentPlayer = "X";
  activeGame = true;
  resultDisplay.textContent = "";
};
reset.addEventListener("click", resetGame);
  




