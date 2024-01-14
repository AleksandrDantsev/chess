import React from "react";
import st from "./ChessBoard.module.scss";
import Cell from "../Cell/Cell";

const ChessBoard: React.FC = () => {
    return(
        <div className={st.board}>
            <Cell />
        </div>
    );
} 

export default ChessBoard;