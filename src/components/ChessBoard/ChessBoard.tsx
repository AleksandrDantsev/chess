import React, { Fragment, useMemo } from "react";
import st from "./ChessBoard.module.scss";
import Board from "../models/Board/Board";
import Cell from "../Cell/Cell";

const ChessBoard: React.FC = () => {
    const paintCells = useMemo(() => () => {
        const board = new Board();
        board.paintBoard();
        const arrayCells = board.arrayCellS;
        console.log(arrayCells)
        return (
            <Fragment>
                {arrayCells.map(el => <Cell color={el.color}/>)}
            </Fragment>
        )
    }, [])

    return(
        <div className={st.board}>
            {paintCells()}
        </div>
    );
} 

export default ChessBoard;