import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.item}>
                <a href='/profile'>Profile</a>
            </div>

            <div className={style.item}>
                <a href='/messages'>Messages</a>
            </div>

            <div className={style.item}>
                <a href='/news'>News</a>
            </div>

            <div className={style.item}>
                <a href='/music'>Music</a>
            </div><br></br>

            <div className={style.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;