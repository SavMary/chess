import React, { useEffect, useState }  from 'react';
import {Board} from "../../Board";
import { Cell } from '../../Cell';
import { Player } from '../../Player';
import CellComponent from "../CellComponent/CellComponent";
import './BoardComponent.scss';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }
  // function handler(e: KeyboardEvent) {
  //   let cell;
  //   console.log(e.key, selectedCell)
  //   if (selectedCell) {
  //     switch(e.key) {
  //       case "ArrowLeft":
  //         cell = {
  //           ...selectedCell,
  //           x: selectedCell.x - 1,
  //         };
  //         break;

  //       case "ArrowUp": 
  //         cell = {
  //           ...selectedCell,
  //           y: selectedCell.y - 1,
  //         };
  //         break;
        
  //       case "ArrowRight":
  //         cell = {
  //           ...selectedCell,
  //           x: selectedCell.x + 1,
  //         };
  //         break;

  //       case "ArrowDown":  
  //         cell = {
  //           ...selectedCell,
  //           y: selectedCell.y + 1,
  //         }
  //         break;
  //       case "Enter":
  //         // e.preventDefault();
  //         // if (cell) {
  //         //   click(cell)
  //         // }
  //         break;

  //       default:
  //         break;
  //     }

  //     if (cell) {
  //       setSelectedCell(board.getCell(cell?.x, cell?.y));
  //     }
  //   }
  // }
  // useEffect(() => {
  //     window.addEventListener('keydown', handler)
  // }, [])


  function click(newcell: Cell) {
    if (selectedCell && selectedCell !== newcell && selectedCell.figure?.canMove(newcell)) {
      selectedCell.moveFigure(newcell);
      swapPlayer()
      setSelectedCell(null);
      updateBoard()
    } else {
      if (newcell.figure?.color === currentPlayer?.color) {
        setSelectedCell(newcell);
      }
    }
  }
  
  return (
    <div>
      <h3 className={currentPlayer?.color}>Current player {currentPlayer?.color}</h3>
      <div className="board">
        {board.cells.map((row, index) =>
          <React.Fragment key={index}>
            {row.map(cell =>
              <CellComponent
                cell={cell}
                key={cell.id}
                selectedCell={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                click={click}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default BoardComponent;
