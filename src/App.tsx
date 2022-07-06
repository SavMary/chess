import React, { useEffect, useState } from 'react';
import './App.scss';
import { Board } from './Board';
import BoardComponent from './components/BoardComponent/BoardComponent';
import { Player } from './Player';
import { Colors } from './types/ColorType';

function App() {
  const [board, setBoard] = useState(new Board());
  const whitePlayer = new Player(Colors.WHITE);
  const blackPlayer = new Player(Colors.BLACK);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer);

  useEffect(() => {
    restart();
  }, [])

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }
  
  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  const boardHandler = (board: Board) => {
    setBoard(board)
  }

  return (
    <div className='chess'>
      <BoardComponent
        board={board}
        boardHandler={boardHandler}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <button
        type='button'
        onClick={restart}
        className="chess__button"
      >
        Restart
      </button>
  </div>
  );
}

export default App;
