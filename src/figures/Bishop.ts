import {Figure, FigureNames} from "./Figure";
import {Colors} from "../types/ColorType";
import {Cell} from "../Cell";
import blackLogo from '../assets/black-bishop.png'
import whiteLogo from '../assets/white-bishop.png'

export class Bishop extends Figure {

  constructor(color: Colors, cell: Cell, name: FigureNames) {
    super(color, cell, name);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    // this.name = FigureNames.BISHOP;
    this.name = name;
  }
}
