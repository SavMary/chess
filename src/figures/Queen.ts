import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import blackLogo from "../assets/black-queen.png";
import whiteLogo from "../assets/white-queen.png";
import { Colors } from "../types/ColorType";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell, name: FigureNames) {
    super(color, cell, name);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    // this.name = FigureNames.QUEEN;
    this.name = name;
  }
}
