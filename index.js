let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgbtn = document.querySelector(".message");
let msg= document.querySelector("#msg");
let turn0 = true;
const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,5,6],
  [3,4,5],
  [6,7,8],
];
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msg.innerText = " ";
  msgbtn.classlist.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
   if (turn0){
    box.innerText = "0";
    turn0= false;
   }
   else{
    box.innerText= "X";
    turn0= true;
   }
   box.disabled = true;
   
  checkWinner();
  });
});


const disableBoxes = () =>{
  for(let box of boxes){
    box.disabled= true;

  }
}
const enableBoxes = () =>{
  for(let box of boxes){
    box.disabled= false;
    box.innerText = "";
  }
}
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgbtn.classList.remove("hide");
  disableBoxes();
}
const checkWinner = () => {
  for(let pattern of winPattern){
    let pos1 =  boxes[pattern[0]].innerText;
    let pos2 =  boxes[pattern[1]].innerText;
    let pos3 =   boxes[pattern[2]].innerText;

    if(pos1 !="" && pos2 !="" && pos3 !=""){
      if(pos1 === pos2 && pos2 === pos3){
        showWinner(pos1);
      }
    }
  }
};
newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);