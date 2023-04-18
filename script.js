const game = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
const start = document.querySelector('.start');
const gameBoard = document.querySelector('.game');
const header = document.querySelector('.header');
const cells = document.querySelectorAll('.cells');
const turn = document.querySelector('.turn')
const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

const player = (name, mark, turn, win) =>{
    return {name, mark, turn, win}
}

const player1 = player('name', 'x', true, false);
const player2 = player('name2', 'o', false, false);

start.addEventListener('click', ()=>{
    pl1 = document.getElementById('pl-name')
    pl2 = document.getElementById('pl-name2')
    
    player1.name = pl1.value;
    player2.name = pl2.value;

    pl1.style.display = 'none';
    pl2.style.display = 'none';

    const button = document.createElement('button');
    button.classList.add('start');
    button.textContent = 'Reset';
    button.addEventListener('click', reset)
    header.appendChild(button);
    start.style.display = 'none'
    turn.textContent = `${player1.name} turn `
})


cells.forEach((e)=>{
    e.addEventListener('click', addGo)
})

function addGo(e){

    if(player1.turn === true){
        player1.turn = false;
        e.target.textContent = player1.mark;
        player2.turn = true;
        turn.textContent = `${player2.name} turn. Mark is ${player2.mark}`
    }else if(player2.turn === true){
        player2.turn = false;
        e.target.textContent = player2.mark;
        player1.turn = true;
        turn.textContent = `${player1.name} turn. Mark is ${player1.mark}`
    }
    score();
    e.target.removeEventListener('click', addGo);
}


function reset(){
    console.log("dfg");
}




