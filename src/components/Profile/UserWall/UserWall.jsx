import React from "react";
import Post from "./Post/Post";
import MyPost from "./MyPost/MyPost";
import style from "./UserWall.module.css"

const UserWall = () => {
    return (
        <div className={style.item}>
            <MyPost />
            <Post />
        </div>
    );
};

export default UserWall;