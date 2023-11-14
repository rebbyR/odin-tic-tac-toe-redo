const gameboard = (() => {

    const board = ['','','','','','','','',''];

    const markBoard = (cellLocation) => {
        gameboard.board[cellLocation] = game.activePlayer.marker;
    };

    return {board, markBoard};
})();

const game = (() => {
    const players = [
        {
            name: 'playerOne',
            marker: 'X'
        },
        {
            name: 'playerTwo',
            marker: 'O'
        },
    ];

    let activePlayer = players[0];

    const switchTurn = () => {
        if (game.activePlayer === players[0]) {
            game.activePlayer = players[1];
        } else game.activePlayer = players[0];
    };

    return {activePlayer, switchTurn};

})();

const displayController = (() => {
    const boardSkeleton = document.getElementById('board-shell');

    const generateInitialBoard = () => {
        for (i in gameboard.board) {
            let cell = boardSkeleton.appendChild(document.createElement('div'));
            cell.classList.add('cell');
            cell.setAttribute('id', `cell${i}`);
        };
    };

    const addCellListeners = () => {
        let cells = document.getElementsByClassName('cell');
        cells[0].addEventListener('click', () => {
            gameboard.markBoard(0);
            displayController.refreshBoard();
            game.switchTurn();
        });
        cells[1].addEventListener('click', () => {
            gameboard.markBoard(1);
            displayController.refreshBoard();
            game.switchTurn();
        });
        cells[2].addEventListener('click', () => {
            gameboard.markBoard(2);
            displayController.refreshBoard();
            game.switchTurn();
        });
        cells[3].addEventListener('click', () => {
            gameboard.markBoard(3);
            displayController.refreshBoard();
            game.switchTurn();
        });
        cells[4].addEventListener('click', () => {
            gameboard.markBoard(4);
            displayController.refreshBoard();
            game.switchTurn();
        });
        cells[5].addEventListener('click', () => {
            gameboard.markBoard(5);
            displayController.refreshBoard();
            game.switchTurn();
        });
        cells[6].addEventListener('click', () => {
            gameboard.markBoard(6);
            displayController.refreshBoard();
            game.switchTurn();
        });
        cells[7].addEventListener('click', () => {
            gameboard.markBoard(7);
            displayController.refreshBoard();
            game.switchTurn();
        });
        cells[8].addEventListener('click', () => {
            gameboard.markBoard(8);
            displayController.refreshBoard();
            game.switchTurn();
        });
    };

    const refreshBoard = () => {
        let cells = document.getElementsByClassName('cell');
        for (i in gameboard.board) {
            cells[i].textContent = gameboard.board[i];
        };
    };
    return {generateInitialBoard, addCellListeners, refreshBoard};

})();


displayController.generateInitialBoard();
displayController.addCellListeners();