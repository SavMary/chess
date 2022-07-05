import {Figure, FigureNames} from "./Figure";
import { Colors } from "../types/ColorType";
import {Cell} from "../Cell";
import blackLogo from "../assets/black-king.png";
import whiteLogo from "../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell, name: FigureNames) {
    super(color, cell, name);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    // this.name = FigureNames.KING;
    this.name = name;
  }
}
