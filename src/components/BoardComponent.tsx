import React, { useEffect, useState }  from 'react';
import {Board} from "../Board";
import { Cell } from '../Cell';
import { Player } from '../Player';
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  const [selectedFigure, setSelectedFigure] = useState<Cell | null>(null)

  // useEffect(() => {
  //   setSelectedCell(board.getCell(0, 3))
  // }, []);

  window.addEventListener('keydown', function(e) {
    let cell;
    console.log(e.key, selectedCell)
    if (selectedCell) {
      switch(e.key) {
        case "ArrowLeft":
          cell = {
            ...selectedCell,
            x: selectedCell.x - 1,
          };
          break;

        case "ArrowUp": 
          cell = {
            ...selectedCell,
            y: selectedCell.y - 1,
          };
          break;
        
        case "ArrowRight":
          cell = {
            ...selectedCell,
            x: selectedCell.x + 1,
          };
          break;

        case "ArrowDown":  
          cell = {
            ...selectedCell,
            y: selectedCell.y + 1,
          }
          break;
        case "Enter":  
          e.preventDefault();
          setSelectedFigure(selectedCell);
          break;

        default:
          break;
      }

      if (cell) {
        setSelectedCell(board.getCell(cell?.x, cell?.y));
      }
    }
  })

  // useEffect(() => {
  //   highlightCells()
  // }, [selectedFigure])

  // function highlightCells() {
  //   board.highlightCells(selectedFigure)
  //   updateBoard()
  // }

  // function updateBoard() {
  //   const newBoard = board.getCopyBoard()
  //   setBoard(newBoard)
  // }
  
  return (
    <div>
      <button
        type="button"
        onClick={() => setSelectedCell(board.getCell(0, 3))}
      >
        Start
      </button>
      {selectedCell && (
        <h3>Current player {currentPlayer?.color}</h3>
      )}
      {selectedFigure && (
        <h3>{`${selectedFigure.figure?.name}-${selectedFigure.color}`}</h3>
      )}
      <div className="board">
        {board.cells.map((row, index) =>
          <React.Fragment key={index}>
            {row.map(cell =>
              <CellComponent
                cell={cell}
                key={cell.id}
                selectedCell={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                selectedFigure={cell.x === selectedFigure?.x && cell.y === selectedFigure?.y}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default BoardComponent;
