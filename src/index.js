import React from "react";
import ReactDOM from "react-dom";

import style from './style.css';

const ROOT=()=>{
    return <div className={style.title}>
            Hello world
            </div>;
}

ReactDOM.render(<ROOT/>,document.getElementById("root"));