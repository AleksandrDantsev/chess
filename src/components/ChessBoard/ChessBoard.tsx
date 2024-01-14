import React from "react";
import st from "./ChessBoard.module.scss";


const ChessBoard: React.FC = () => {
    return(
        <div className={st.board}></div>
    );
} 

export default ChessBoard;