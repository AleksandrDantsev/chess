import Figure from "../figures/Figure";

export enum ColorCell {
    DARK= 'black',
    WHITE= 'white'
}


class Cell {
    readonly x: number;
    readonly color: ColorCell;
    figure: Figure | null;
    available: boolean;
    id: number;

    constructor(x: number, figure: Figure | null, color: ColorCell) {
        this.x = x;
        this.figure = figure;
        this.available = false;
        this.color = color;
        this.id = Math.random() + this.x;
    }

}

export default Cell;