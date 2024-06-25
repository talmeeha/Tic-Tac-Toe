let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-game");
let turnO = true;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>
    {
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true;
        checkwinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled= true;
    }
};
const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled= false;
        box.innerText="";
    }
};
const resetgame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("msg");
}
const newgame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("msg");
}

const showWinner = (winner) => {
    msg.innerText = ` winner${winner}`;
    msg.classList.remove("msg");
    disableBoxes();
}
const checkwinner = () => {
    for(let p of win){
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;
    
    if(pos1!="" && pos2!="" && pos3!="")
    {
        if(pos1===pos2 && pos2===pos3)
        {
            showWinner(pos1);
            return true;
        }
    }
}
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);