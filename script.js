let box = document.querySelectorAll(".move");
let chance = "X";
let winMessage = document.getElementById("winning-message");
let winner = document.getElementById("win");

//showing the winning message
function announce(){
winner.innerText = `${chance} is the winner`;
        winMessage.showModal();
        winMessage.addEventListener("click",() => {
            winMessage.close();
        })
}
//changing turn
function chance_change (){
    if(chance === "X"){
        chance = "O";
    }else{
        chance = "X";
    }
}
//clearing screen
function screenclear(){
    box.forEach(b =>{
        b.innerText = "";
    })
}
//code for the score board
let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
function score(){
    if(chance === "X"){
            count1.innerText = parseInt(count1.innerText) + 1;
        }else{
            count2.innerText = parseInt(count2.innerText) + 1;
        }
}
//checking if anyone has one
function isWin(){
    if(box1.innerText === box2.innerText && box1.innerText === box3.innerText && box1.innerText !== ""){
        announce();
        score ();
        screenclear();
    }else if(box4.innerText === box5.innerText && box4.innerText === box6.innerText && box4.innerText !== ""){
         announce();
        score ();
        screenclear();
    } else if(box7.innerText === box8.innerText && box7.innerText === box9.innerText && box7.innerText !== ""){
         announce();
        score ();
        screenclear();
    }else if(box1.innerText === box4.innerText && box1.innerText === box7.innerText && box1.innerText !== ""){
         announce();
        score ();
        screenclear();
    }else if(box2.innerText === box5.innerText && box2.innerText === box8.innerText && box2.innerText !== ""){
         announce();
        score ();
        screenclear();
    }else if(box3.innerText === box6.innerText && box3.innerText === box9.innerText && box3.innerText !== ""){
         announce();
        score ();
        screenclear();
    }else if(box1.innerText === box5.innerText && box1.innerText === box9.innerText && box1.innerText !== ""){
         announce();
        score ();
        screenclear();
    }else if(box3.innerText === box5.innerText && box3.innerText === box7.innerText && box3.innerText !== ""){
         announce();
        score ();
        screenclear();
    }
}
//players playing their move 
box.forEach(a =>{
    a.addEventListener("click", ()=>{
        a.innerText = chance;
        isWin();
        chance_change();
    })
}) 

//clearing score
let scoreClr = document.getElementById("scoreclr");
scoreClr.addEventListener("click",()=>{
count1.innerText = 0;
count2.innerText = 0;
});

//clearing screen mannully
let reset = document.getElementById("reset");
reset.addEventListener("click",() => {
    screenclear();
});