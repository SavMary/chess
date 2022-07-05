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

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }
  
  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className='app'>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
    </div>
  );
}

export default App;
