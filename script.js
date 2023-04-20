const start = document.querySelector('.start');
const header = document.querySelector('.header');
const turn = document.querySelector('.turn');
const gamsf = document.querySelector('.game');
const restart = document.querySelector('.reset');

document.querySelector('#pl-name').value = 'Bishop';
document.querySelector('#pl-name2').value = 'Huddlestone';

const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

const gameBoard = (() =>{
    let board = ['', '', '', '', '', '', '', '', ''];
    const render = () =>{

        let boardContent = "";
            board.forEach((element, index)=>{
                boardContent += `<div class="cells" id="cells-${index}">${element}</div>`
            })
            gamsf.innerHTML = boardContent;
            document.querySelectorAll('.cells').forEach((e)=>{
                e.addEventListener('click', game.addGo);
            })
        }
    
    const update = (index, mark) =>{
        board[index] = mark;
        render();
    }
    
    return {
        render,
        update, board
    }
})();


start.addEventListener('click', ()=>{
    game.start();
    start.style.display = 'none';
    restart.style.display = 'block';
})

restart.addEventListener('click', ()=>{
    game.reset();
    console.log(gameBoard.board)
} )

const players = (name, mark, turn)=>{
    return {
        name, mark, turn
    }
}

const game = (()=>{
    let isGameOver;
    const player1 = players('', 'x', true);
    const player2 = players('', 'o', false);
    const start = () =>{
        player1.name = document.querySelector('#pl-name').value;
        player2.name = document.querySelector('#pl-name2').value;
        isGameOver = false;
        gameBoard.render();
    };


    const addGo = (e) =>{
        if(isGameOver === true){
            return;
        }
        let index = e.target.id[e.target.id.length-1];
        if(gameBoard.board[index]!==''){
            return;
        }
        if(player1.turn === true){
            gameBoard.update(index, player1.mark);
            player1.turn = false;
            player2.turn = true;
            turn.textContent = `${player2.name}'s turn!`
        }else if(player2.turn === true){
            gameBoard.update(index, player2.mark);
            player2.turn = false;
            player1.turn = true;
            turn.textContent = `${player1.name}'s turn!`
        }

        if( draw() === true){
            turn.textContent = "It's a draw!";
            isGameOver = true;
        }

        if(winner() === true){
            switch(player1.turn){
                case true:
                    turn.textContent = `${player2.name}'s victory!`
                    break;
                case false:
                    turn.textContent = `${player1.name}'s victory!`
                    break;
            }
            isGameOver = true;
        }
    }

    const draw = () =>{
        let count = 0;
        for(let i = 0; i < 9; i++){
            if(gameBoard.board[i] !== ''){
                count++;
            }
        }

        if(count === 9){
            return true;
        }
        return false;
    }

    const winner = () =>{
        for(let i = 0; i<winCombinations.length; i++){
            const[a, b, c] = winCombinations[i];
            if(gameBoard.board[a] && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[a] === gameBoard.board[c]){
                return true;
            }
        }
        return false;
    }

    const reset = () =>{
        player1.name = document.querySelector('#pl-name').value;
        player2.name = document.querySelector('#pl-name2').value;
        isGameOver = false;
        for(let i = 0; i < 9; i++ ){
            gameBoard.update(i, "");
        }
        gameBoard.render();
    }


    return{
        start,
        addGo,
        reset
    }
})();



