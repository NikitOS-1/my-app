import React from "react";
import style from "./Post.module.css";
import PostMessage from "./PostMessage/PostMessage";
import LikeCount from "./LikeCount/LikeCount";

const Post = (props) => {
    return (
        <div className={style.item}>
            <PostMessage />
            <LikeCount />
        </div>
    );
};

export default Post;