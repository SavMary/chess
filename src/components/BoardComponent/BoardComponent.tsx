import React, { useCallback, useEffect, useState }  from 'react';
import {Board} from "../../Board";
import { Cell } from '../../Cell';
import { Player } from '../../Player';
import CellComponent from "../CellComponent/CellComponent";
import './BoardComponent.scss';

interface Props {
  board: Board;
  boardHandler: (board: Board) => void
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: React.FC<Props> = React.memo(
  ({board, boardHandler, currentPlayer, swapPlayer}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  const highlightCells = useCallback(
    () => {
      board.availableCells(selectedCell)
      updateBoard()
    }, [selectedCell],
  );

  const updateBoard = useCallback(
    () => {
      const newBoard = board.getCopyBoard()
      boardHandler(newBoard)
    }, [board],
  );

  const clickHandler = useCallback(
    (newcell: Cell) => {
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
    }, [selectedCell],
  );
  
  return (
    <div>
      <h2 
        style={{color: currentPlayer?.color}}
        className="board__title"
      >
        Current player {currentPlayer?.color}
      </h2>
      <div className="board">
        {board.cells.map((row, i) =>
          <React.Fragment key={i}>
            {row.map(cell =>
              <CellComponent
                cell={cell}
                key={cell.id}
                selectedCell={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                clickHandler={clickHandler}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
});

export default BoardComponent;
