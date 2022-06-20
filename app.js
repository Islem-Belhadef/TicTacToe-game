const playBox = document.querySelector('.play_box');
const resetButton = document.querySelector('.reset');
const winLine = document.querySelector('.win_line');

/*-------------------------------this area----------------------------------------------------*/
const switchModeButton = document.querySelector('.switch_mode');
const mode = document.querySelector('.current_mode');

let machineMode = true;

switchModeButton.addEventListener('click', ()=>{
    machineMode = !machineMode;

    X_winCounter=0;
    O_winCounter=0;
    tieCounter=0;
    init();
});

if (machineMode) {
    mode.textContent = '(Machine)'
    mode.style.color = 'red';
}
else {
    mode.textContent = '(PVP)'
    mode.style.color = 'blue';
}

console.log(machineMode);
/*----------------------------------7ta hna-------------------------------------------------*/


const allCells = Array.from(document.getElementsByClassName('cell'));

const cell1 = document.querySelector('.cell1');
const cell2 = document.querySelector('.cell2');
const cell3 = document.querySelector('.cell3');
const cell4 = document.querySelector('.cell4');
const cell5 = document.querySelector('.cell5');
const cell6 = document.querySelector('.cell6');
const cell7 = document.querySelector('.cell7');
const cell8 = document.querySelector('.cell8');
const cell9 = document.querySelector('.cell9');

// pre-setting the variables to initial values
let turn = "X";
let turnCounter = 0;
let X_winCounter = 0;
let O_winCounter = 0;
let tieCounter = 0;

const xScore = document.querySelector('.x_score');
const oScore = document.querySelector('.o_score');
const ties = document.querySelector('.ties');

xScore.textContent = X_winCounter;
oScore.textContent = O_winCounter;
ties.textContent = tieCounter;

const playTurn = (e)=>{
    if(e.target.textContent === "X" || e.target.textContent === "O"){
        return;
    };

    e.target.textContent = turn;
    turnCounter++;

    if(turn === "X") turn = "O";
    else turn = "X";

    allCells.forEach((cell)=> {
        if(cell.textContent === 'X') cell.style.color = '#f52c25';
        else cell.style.color = '#45d153';
    });

    if(turnCounter === 9 && !hasWonPVP()) {
        // window.alert('draw');
        tieCounter++ ;
        setTimeout(init, 3000);
    };

    if (hasWonPVP()){
        if(turn === 'X') O_winCounter++;
        else X_winCounter++;
        // window.alert("Player "+ turn + " won the game");
        setTimeout(init, 3000);
    };
};

const hasWonPVP = ()=>{

    if((cell1.textContent === 'X' && cell2.textContent === 'X' && cell3.textContent === 'X') || (cell1.textContent === 'O' && cell2.textContent === 'O' && cell3.textContent === 'O')){
        winLine.style.display= 'block';
        winLine.style.top='-331px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(0deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell4.textContent === 'X' && cell5.textContent === 'X' && cell6.textContent === 'X') || (cell4.textContent === 'O' && cell5.textContent === 'O' && cell6.textContent === 'O')){
        winLine.style.display= 'block';
        winLine.style.top='-200px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(0deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell7.textContent === 'X' && cell8.textContent === 'X' && cell9.textContent === 'X') || (cell7.textContent === 'O' && cell8.textContent === 'O' && cell9.textContent === 'O')){
        winLine.style.display= 'block';
        winLine.style.top='-71px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(0deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell1.textContent === 'X' && cell4.textContent === 'X' && cell7.textContent === 'X') || (cell1.textContent === 'O' && cell4.textContent === 'O' && cell7.textContent === 'O')){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='-129px';
        winLine.style.transform='rotate(90deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell2.textContent === 'X' && cell5.textContent === 'X' && cell8.textContent === 'X') || (cell5.textContent === 'O' && cell2.textContent === 'O' && cell8.textContent === 'O')){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(90deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell3.textContent === 'X' && cell6.textContent === 'X' && cell9.textContent === 'X') || (cell9.textContent === 'O' && cell6.textContent === 'O' && cell3.textContent === 'O')){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='129px';
        winLine.style.transform='rotate(90deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell1.textContent === 'X' && cell5.textContent === 'X' && cell9.textContent === 'X') || (cell1.textContent === 'O' && cell5.textContent === 'O' && cell9.textContent === 'O')){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(45deg)';
        winLine.style.width='450px';
        return true;
    }
    if((cell3.textContent === 'X' && cell5.textContent === 'X' && cell7.textContent === 'X') || (cell3.textContent === 'O' && cell5.textContent === 'O' && cell7.textContent === 'O')){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(-45deg)';
        winLine.style.width='450px';
        return true;
    }

    return false;
};

const hasWonAuto = (letter)=>{

    if((cell1.textContent === letter && cell2.textContent === letter && cell3.textContent === letter)/*  || (cell1.textContent === 'O' && cell2.textContent === 'O' && cell3.textContent === 'O') */){
        winLine.style.display= 'block';
        winLine.style.top='-331px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(0deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell4.textContent === letter && cell5.textContent === letter && cell6.textContent === letter) /* || (cell4.textContent === 'O' && cell5.textContent === 'O' && cell6.textContent === 'O') */){
        winLine.style.display= 'block';
        winLine.style.top='-200px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(0deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell7.textContent === letter && cell8.textContent === letter && cell9.textContent === letter) /* || (cell7.textContent === 'O' && cell8.textContent === 'O' && cell9.textContent === 'O') */){
        winLine.style.display= 'block';
        winLine.style.top='-71px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(0deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell1.textContent === letter && cell4.textContent === letter && cell7.textContent === letter)/*  || (cell1.textContent === 'O' && cell4.textContent === 'O' && cell7.textContent === 'O') */){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='-129px';
        winLine.style.transform='rotate(90deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell2.textContent === letter && cell5.textContent === letter && cell8.textContent === letter) /* || (cell5.textContent === 'O' && cell2.textContent === 'O' && cell8.textContent === 'O') */){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(90deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell3.textContent === letter && cell6.textContent === letter && cell9.textContent === letter) /* || (cell9.textContent === 'O' && cell6.textContent === 'O' && cell3.textContent === 'O') */){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='129px';
        winLine.style.transform='rotate(90deg)';
        winLine.style.width='350px';
        return true;
    }
    if((cell1.textContent === letter && cell5.textContent === letter && cell9.textContent === letter) /* || (cell1.textContent === 'O' && cell5.textContent === 'O' && cell9.textContent === 'O') */){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(45deg)';
        winLine.style.width='450px';
        return true;
    }
    if((cell3.textContent === letter && cell5.textContent === letter && cell7.textContent === letter)/*  || (cell3.textContent === 'O' && cell5.textContent === 'O' && cell7.textContent === 'O') */){
        winLine.style.display= 'block';
        winLine.style.top='-204px';
        winLine.style.left='0px';
        winLine.style.transform='rotate(-45deg)';
        winLine.style.width='450px';
        return true;
    }

    return false;
};

const init = () => {
    // clearing all cells and resetting the turn counter
    allCells.forEach((cell) => {
        cell.textContent = '';
    });
    turnCounter = 0;

    // changing the score after the game ends
    xScore.textContent = X_winCounter;
    oScore.textContent = O_winCounter;
    ties.textContent = tieCounter;

    // removing the winning line to start a new game
    winLine.style.display = 'none';

    // switching between X and O in the start of the game
    if((X_winCounter + O_winCounter + tieCounter) % 2 === 0) turn = "X";
    else turn = "O";

    // resetting played cells
    playedCells = [];
    emptyCells = ['1','2','3','4','5','6','7','8','9'];
};

resetButton.addEventListener('click', init);

// Automatic game mode:
var playedCells = [];
let emptyCells = ['1','2','3','4','5','6','7','8','9'];

const playVsMachine = async (e)=>{
    if(e.target.textContent === "X" || e.target.textContent === "O"){
        return;
    };

    turn = 'X';

    e.target.textContent = turn;
    turnCounter++;

    if((turnCounter<9) && !hasWonAuto('X')) await machineTurn(e);

    allCells.forEach((cell)=> {
        if(cell.textContent === 'X') cell.style.color = '#f52c25';
        else cell.style.color = '#45d153';
    });

    if(turnCounter === 9 && !hasWonAuto('X')) {
        // window.alert('draw');
        tieCounter++ ;
        setTimeout(init, 3000);
    };

    if (hasWonAuto('X')){
        X_winCounter++;
        // window.alert("Player "+ turn + " won the game");
        setTimeout(init, 3000);
    };

};

const machineTurn = async (e) => {

    turn = 'O';

    turnCounter++ ;

    playedCells.push(e.target.id);
    // console.log('played cells: '+ playedCells);

    emptyCells = emptyCells.filter(n => !playedCells.includes(n));
    // console.log('empty cells: '+ emptyCells);

    randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]; 
    // console.log('random cell: '+ randomCell);

    allCells[randomCell-1].textContent = 'O';

    playedCells.push(allCells[randomCell-1].id)
    // console.log('new played cells: '+ playedCells);

    emptyCells = emptyCells.filter(n => !playedCells.includes(n));
    // console.log('new empty cells: '+ emptyCells);

    
    if(turnCounter === 9 && !hasWon2()) {
        // window.alert('draw');
        tieCounter++ ;
        setTimeout(init, 3000);
    };

    if (hasWonAuto("O")){
        O_winCounter++;
        // window.alert("Player "+ turn + " won the game");
        setTimeout(init, 3000);
    };
}

if(machineMode) {
    allCells.forEach((cell) => {
        cell.addEventListener('click', playVsMachine);
    });
}
else {
    allCells.forEach((cell) => {
        cell.addEventListener('click', playTurn);
    }); 
};