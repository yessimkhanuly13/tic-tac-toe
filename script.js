const start = document.querySelector('.start');
const header = document.querySelector('.header');
const turn = document.querySelector('.turn');
const gamsf = document.querySelector('.game');

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
               e.addEventListener('click', ()=>{console.log(e)})
            })
        }
    return {
        render,
    }
})();


start.addEventListener('click', ()=>{
    gameBoard.render();
})


const game = (()=>{
})();



