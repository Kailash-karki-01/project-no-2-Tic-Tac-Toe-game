let box = document.querySelectorAll(".move");
let chance = "X";
let compChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let ind;
function chance_change() {
    if (chance === "X") {
        chance = "O";
    } else {
        chance = "X";
    }
}
function screenclear() {
    box.forEach(b => {
        b.innerText = "";
    })
    compChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}
let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
function score() {
    if (chance === "X") {
        count1.innerText = parseInt(count1.innerText) + 1;
    } else {
        count2.innerText = parseInt(count2.innerText) + 1;
    }
}
function isWin() {
    if (box1.innerText === box2.innerText && box1.innerText === box3.innerText && box1.innerText !== "") {
        alert(chance + " has won");
        score();
        screenclear();
    } else if (box4.innerText === box5.innerText && box4.innerText === box6.innerText && box4.innerText !== "") {
        alert(chance + " has won");
        score();
        screenclear();
    } else if (box7.innerText === box8.innerText && box7.innerText === box9.innerText && box7.innerText !== "") {
        alert(chance + " has won");
        score();
        screenclear();
    } else if (box1.innerText === box4.innerText && box1.innerText === box7.innerText && box1.innerText !== "") {
        alert(chance + " has won");
        score();
        screenclear();
    } else if (box2.innerText === box5.innerText && box2.innerText === box8.innerText && box2.innerText !== "") {
        alert(chance + " has won");
        score();
        screenclear();
    } else if (box3.innerText === box6.innerText && box3.innerText === box9.innerText && box3.innerText !== "") {
        alert(chance + " has won");
        score();
        screenclear();
    } else if (box1.innerText === box5.innerText && box1.innerText === box9.innerText && box1.innerText !== "") {
        alert(chance + " has won");
        score();
        screenclear();
    } else if (box3.innerText === box5.innerText && box3.innerText === box7.innerText && box3.innerText !== "") {
        alert(chance + " has won");
        score();
        screenclear();
    }
}
function staleMate(){
    if(compChoices.length == 0
    ){
        screenclear();
    }
    }

function compMove(j) {
    staleMate();
    ind = compChoices.indexOf(j);
    compChoices.splice(ind, 1);
    console.log(compChoices);
     staleMate()
    let comp = Math.floor(Math.random() * compChoices.length);
    console.log(comp);
    console.log(compChoices[comp])
    ind = compChoices.indexOf(compChoices[comp]);
   
    box[compChoices[comp]].innerText = "O";
    compChoices.splice(ind, 1); 
     
    isWin();
    
  chance_change();
    console.log(compChoices);

}
box.forEach((a, i) => {
    a.addEventListener("click", () => {
        a.innerText = chance;
        console.log(i)

        
        isWin();
        staleMate();
        chance_change();
        setTimeout(() => {
            compMove(i);
        }, 500);
    })

})


let scoreClr = document.getElementById("scoreclr");
scoreClr.addEventListener("click", () => {
    count1.innerText = 0;
    count2.innerText = 0;
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    screenclear();
})

console.log("hi");


