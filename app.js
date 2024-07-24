const winningHeaderTxt = document.querySelector(".winningHeaderTxt");
let mainPlayer2 = document.querySelector(".mainPlayer2");
const btn = document.querySelector(".btn");
const profile1Color = document.querySelector("#profile1");
const box = document.querySelectorAll(".box");
const profile2Color = document.querySelector("#profile2");
let checkTxt = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const stopTxt = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let currentBox = [ , , , , , , , , ,];
let txtValue = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
let currentTurn = "X";

playerTurn();




function start(num) {
    if (checkTxt[num - 1 ] === 1) {
        return 0;
    } else {

        let box = document.querySelector(`#box${num}`);
        let txtShift = txtValue.shift();
        if (txtShift == "X") {
            box.firstChild.style.color = "green";
        } else {
            box.firstChild.style.color = "red";
        }
        box.firstChild.innerText =txtShift ;
        checkTxt[num - 1] = 1;
        currentBox[num - 1] = txtShift;
        console.log(box);
        console.log(checkTxt);
        console.log(currentBox)
        checkWinning();
        playerTurn()
    }
    
}

function playerTurn() {
    if (txtValue[0] == "X") {
        if (profile2Color.style.backgroundColor == "red") {
            profile2Color.style.backgroundColor = "white";

        }
        profile1Color.style.backgroundColor = "green";

        currentTurn = "X";
        console.log(currentTurn);
        
    } else {
        if (profile1Color.style.backgroundColor == "green") {
            profile1Color.style.backgroundColor = "white";
        }
        profile2Color.style.backgroundColor="red";
        currentTurn = "O";
        console.log(currentTurn);
    }
}


function restart() {
    
    for (let i = 0; i < 9; i++){
        if (checkTxt[i] === 1) {
            let boxChange = document.querySelector(`#box${i + 1}`);
            boxChange.firstChild.innerText = "";
        }
    }
    checkTxt = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    txtValue = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    currentBox = [, , , , , , , , ,];
    winningHeaderTxt.innerText = "";
    playerTurn();
    currentTurn = "X";
    btn.style = "animation-name: none"; 
    console.log("Restart")
    console.log(checkTxt)
    console.log(txtValue);
}

function checkWinning() {
    if (
        (currentBox[0] == "X" && currentBox[4] == "X" && currentBox[8] == "X") ||
        (currentBox[2] == "X" && currentBox[4] == "X" && currentBox[6] == "X") ||
        (currentBox[0] == "X" && currentBox[1] == "X" && currentBox[2] == "X") ||
        (currentBox[3] == "X" && currentBox[4] == "X" && currentBox[5] == "X") ||
        (currentBox[6] == "X" && currentBox[7] == "X" && currentBox[8] == "X") ||
        (currentBox[0] == "X" && currentBox[3] == "X" && currentBox[6] == "X") ||
        (currentBox[1] == "X" && currentBox[4] == "X" && currentBox[7] == "X") ||
        (currentBox[2] == "X" && currentBox[5] == "X" && currentBox[8] == "X")

    ) {
        checkTxt = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        winningHeaderTxt.style.color = "green";
        winningHeaderTxt.innerText = "X win the match";
        
        console.log("x win")
    } else if (
        (currentBox[0] == "O" && currentBox[4] == "O" && currentBox[8] == "O") ||
        (currentBox[2] == "O" && currentBox[4] == "O" && currentBox[6] == "O") ||
        (currentBox[0] == "O" && currentBox[1] == "O" && currentBox[2] == "O") ||
        (currentBox[3] == "O" && currentBox[4] == "O" && currentBox[5] == "O") ||
        (currentBox[6] == "O" && currentBox[7] == "O" && currentBox[8] == "O") ||
        (currentBox[0] == "O" && currentBox[3] == "O" && currentBox[6] == "O") ||
        (currentBox[1] == "O" && currentBox[4] == "O" && currentBox[7] == "O") ||
        (currentBox[2] == "O" && currentBox[5] == "O" && currentBox[8] == "O")

    ) {
        checkTxt = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        winningHeaderTxt.style.color = "red";
        winningHeaderTxt.innerText = "O win the match";
        console.log("O win")
    } else if (conditionDraw() == true) {
        winningHeaderTxt.style.color = "blue";
        winningHeaderTxt.innerText = "Draw";
        
        btn.style = "animation-name: newAni";   
        console.log("Draw");
    } else {
       
        return 0;
    }
    function conditionDraw() {
        for (let i = 0; i < 9; i++) {
            if (checkTxt[i] !== stopTxt[i]) {
                return false;
            }
        
        }
        return true;
    }
}
