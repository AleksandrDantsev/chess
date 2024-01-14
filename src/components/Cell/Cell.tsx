import React from "react";
import st from "./Cell.module.scss";

interface ICell {
    color: string;
}

enum ColorCell {
    DARK= 'black',
    WHITE= 'white'
}


const Cell: React.FC<ICell> = ({color}) => {
    return(
        <div className={st.cell + ' ' + st[color]}>
        
        </div>
    );
} 

export default Cell;