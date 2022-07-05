import React, {FC} from 'react';
import {Cell} from "../Cell";

interface CellProps {
  cell: Cell;
  selectedCell: boolean;
  // selectedFigure: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selectedCell, click}) => {
  const bcClass = selectedCell ? "selected-cell" : '';
  return (
    <div className={['cell', cell.color, bcClass].join(' ')}
    onClick={() => click(cell)}
    // style={{background: cell.available && cell.figure ? 'green' : ''}}
    >
       {/* {cell.available && !cell.figure && <div className={"available"}/>} */}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.logo}/>}
    </div>
  );
};

export default CellComponent;
