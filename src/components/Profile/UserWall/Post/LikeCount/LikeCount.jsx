import React from "react";
import style from "./LikeCount.module.css";



const LikeCount = (props) => {
    let count = 0;

    return (
        <div className={style.item}>
            <p>{count}</p>
            <button>Like</button>
        </div>
    );
};

export default LikeCount;