import React, {FC} from 'react';
import {Cell} from "../../Cell";
import './CellComponent.scss';
import className from 'classnames';

interface Props {
  cell: Cell;
  selectedCell: boolean;
  clickHandler: (cell: Cell) => void;
}

const CellComponent: FC<Props> = ({cell, selectedCell, clickHandler}) => {
  return (
    <div className={className(`cell ${cell.color}`, {
      'cell--selected': selectedCell,
      'cell--available-kill' : cell.available && cell.figure,
    })}
    onClick={() => clickHandler(cell)}
    >
       {cell.available && !cell.figure && <div className='cell--available'/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.logo}/>}
    </div>
  );
}

export default CellComponent;
