import React, {FC} from 'react';
import {Cell} from "../Cell";

interface CellProps {
  cell: Cell;
  selectedCell: boolean;
  selectedFigure: boolean;
}

const CellComponent: FC<CellProps> = ({cell, selectedCell, selectedFigure}) => {
  const bcClass = selectedCell ? "selected-cell" : '';
  return (
    <div className={['cell', cell.color, selectedFigure ? "selected-figure" : bcClass].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.logo}/>}
    </div>
  );
};

export default CellComponent;
