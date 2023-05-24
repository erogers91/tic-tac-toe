import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const initialBoard = Array(9).fill('');
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  const handleCellClick = (index) => {
    if (board[index] === '' && winner === '') {
      const updatedBoard = [...board];
      updatedBoard[index] = currentPlayer;
      setBoard(updatedBoard);
      checkWinner(updatedBoard, currentPlayer);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board, player) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
  
    let isTie = true;
    
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] === player && board[b] === player && board[c] === player) {
        setWinner(player);
        isTie = false;
        break;
      }
    }
  
    if (isTie && board.every(cell => cell !== '')) {
      setWinner('tie');
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setWinner('');
  };

  return (
    <div className="tic-tac-toe">
      <div className="tic-tac-toe-container">
        <h1 className="title">Tic*Tac*Toe</h1>
        <div className="board">
          {board.map((cell, index) => (
            <div
              className={`cell ${cell}`}
              key={index}
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        <div className="game-info">
          <div className="player-turn">Current Player: {currentPlayer}</div>
          <div className="game-status">
            {winner ? (winner === 'tie' ? <span className="tie-message">It's a tie!</span> : <span className="win-message">Player {winner} wins!</span>) : ''}
          </div>
        </div>
        <button className="reset-button" onClick={resetGame}>Reset</button>
      </div>
      <div className="footer">
        Developed by Eric Rogers
      </div>
    </div>
  );
};

export default TicTacToe;
