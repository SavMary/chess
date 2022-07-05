import React, {FC} from 'react';
import {Cell} from "../../Cell";
import './CellComponent.scss';
// import className from 'classnames';

interface CellProps {
  cell: Cell;
  selectedCell: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selectedCell, click}) => {
  const bcClass = selectedCell ? "cell--selected" : '';
  return (
    <div className={['cell', cell.color, bcClass].join(' ')}
    onClick={() => click(cell)}
    style={{background: cell.available && cell.figure ? 'green' : ''}}
    >
       {cell.available && !cell.figure && <div className={"cell--available"}/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.logo}/>}
    </div>
  );
};

export default CellComponent;
