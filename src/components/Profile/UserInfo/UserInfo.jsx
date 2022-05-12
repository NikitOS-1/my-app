import React from "react";
import Ava from "./Ava/Ava";
import Description from "./Description/Description";
import style from "./UserInfo.module.css"

const UserInfo = () => {
    return (
        <div className={style.item}>
            <Ava />
            <Description />
        </div>
    );
};

export default UserInfo;