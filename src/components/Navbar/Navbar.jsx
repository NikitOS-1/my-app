import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.item}>
                <a href='#'>Message</a>
            </div>

            <div className={style.item}>
                <a href='#'>Profile</a>
            </div>

            <div className={style.item}>
                <a href='#'>News</a>
            </div>

            <div className={style.item}>
                <a href='#'>Post</a>
            </div>
        </nav>
    );
};

export default Navbar;