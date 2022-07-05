import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import blackLogo from "../assets/black-pawn.png";
import whiteLogo from "../assets/white-pawn.png";
import { Colors } from "../types/ColorType";

export class Pawn extends Figure {

  constructor(color: Colors, cell: Cell, name: FigureNames) {
    super(color, cell, name);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    // this.name = FigureNames.PAWN;
    this.name = name;
  }
}
