import Cell from "../Cell/Cell";
import {ColorCell} from "../Cell/Cell";


class Board {
    arrayCellS: Cell[] = [];

    public paintBoard () {
        let countRow = false;
        for (let i = 1; i < 65; i++) {
            if (i % 2 == 0) this.arrayCellS.push(new Cell(i, null, countRow ? ColorCell.DARK : ColorCell.WHITE))
            else this.arrayCellS.push(new Cell(i, null, countRow ? ColorCell.WHITE : ColorCell.DARK))

            if (i % 8 == 0) countRow = !countRow;
        }
    }
}

export default Board;