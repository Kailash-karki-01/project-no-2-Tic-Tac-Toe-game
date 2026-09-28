let box = document.querySelectorAll(".move");
let chance = "X";
function chance_change (){
    if(chance === "X"){
        chance = "O";
    }else{
        chance = "X";
    }
}
function screenclear(){
    box.forEach(b =>{
        b.innerText = "";
    })
}
let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
function score(){
    if(chance === "X"){
            count1.innerText = parseInt(count1.innerText) + 1;
        }else{
            count2.innerText = parseInt(count2.innerText) + 1;
        }
}
function isWin(){
    if(box1.innerText === box2.innerText && box1.innerText === box3.innerText && box1.innerText !== ""){
        alert(chance + " has won");
        score ();
        screenclear();
    }else if(box4.innerText === box5.innerText && box4.innerText === box6.innerText && box4.innerText !== ""){
        alert(chance + " has won");
        score ();
        screenclear();
    } else if(box7.innerText === box8.innerText && box7.innerText === box9.innerText && box7.innerText !== ""){
        alert(chance + " has won");
        score ();
        screenclear();
    }else if(box1.innerText === box4.innerText && box1.innerText === box7.innerText && box1.innerText !== ""){
        alert(chance + " has won");
        score ();
        screenclear();
    }else if(box2.innerText === box5.innerText && box2.innerText === box8.innerText && box2.innerText !== ""){
        alert(chance + " has won");
        score ();
        screenclear();
    }else if(box3.innerText === box6.innerText && box3.innerText === box9.innerText && box3.innerText !== ""){
        alert(chance + " has won");
        score ();
        screenclear();
    }else if(box1.innerText === box5.innerText && box1.innerText === box9.innerText && box1.innerText !== ""){
        alert(chance + " has won");
        score ();
        screenclear();
    }else if(box3.innerText === box5.innerText && box3.innerText === box7.innerText && box3.innerText !== ""){
        alert(chance + " has won");
        score ();
        screenclear();
    }
}
box.forEach(a =>{
    a.addEventListener("click", ()=>{
        a.innerText = chance;
        isWin();
        chance_change();
    })
}) 

let scoreClr = document.getElementById("scoreclr");
scoreClr.addEventListener("click",()=>{
count1.innerText = 0;
count2.innerText = 0;
});

let reset = document.getElementById("reset");
reset.addEventListener("click",() => {
    screenclear();
})


//for vs computer

