import React, { Fragment, useMemo } from "react";
import st from "./ChessBoard.module.scss";
import Cell from "../Cell/Cell";

const ChessBoard: React.FC = () => {


    const paintCells = useMemo(() => () => {
        const arrayCellS = [];
        let countRow = false;
        for (let i = 1; i < 65; i++) {
            if (i % 2 == 0) arrayCellS.push(<Cell color={countRow ? "light" : 'dark'} />)
            else arrayCellS.push(<Cell color={countRow ? "dark" : 'light'} />)
            if (i % 8 == 0) countRow = !countRow;
        }
        return (
            <Fragment>
                {arrayCellS.map(el => el)}
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