import {Cell} from "./Cell";
import {Pawn} from "./figures/Pawn";
import {Queen} from "./figures/Queen";
import {Bishop} from "./figures/Bishop";
import { Colors } from "./types/ColorType";
import { Rook } from "./figures/Rook";

export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 5; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 5; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null));
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null));
        }
      }
      this.cells.push(row);
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }

  public availableCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addPawns() {
    for (let i = 0; i < 5; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 3));
    }
  }

  private addQueens() {
    new Queen(Colors.BLACK, this.getCell(2, 0));
    new Queen(Colors.WHITE, this.getCell(2, 4));
  }

  private addBishops() {
    new Bishop(Colors.BLACK, this.getCell(1, 0));
    new Bishop(Colors.BLACK, this.getCell(3, 0));
    new Bishop(Colors.WHITE, this.getCell(3, 4));
    new Bishop(Colors.WHITE, this.getCell(1, 4));
  }

  private addRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(4, 0))
    new Rook(Colors.WHITE, this.getCell(0, 4))
    new Rook(Colors.WHITE, this.getCell(4, 4));
  }

  public addFigures() {
    this.addPawns();
    this.addBishops();
    this.addQueens();
    this.addRooks();
  }
}
