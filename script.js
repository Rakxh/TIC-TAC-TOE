let boxes=document.querySelectorAll(".box");
let rst=document.querySelector("#reset");

let newbtn=document.querySelector("#newbtn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turnO=true;
    enablebtns();
    msgcont.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }

        box.disabled=true;//for disabling the boxes after selecting it

        checkWin();
    });
});

const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{

    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebtns();

}


const checkWin=()=>{
    for(let pat of winpat){
        
        let pos1val=boxes[pat[0]].innerText;
        let pos2val=boxes[pat[1]].innerText;
        let pos3val=boxes[pat[2]].innerText;

        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val){
                console.log("WINNER",pos1val);
                showWinner(pos1val);
            }
        }
    }
}


newbtn.addEventListener("click",resetgame);
rst.addEventListener("click",resetgame);