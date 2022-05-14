import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// import style from "./Navbar.module.css";


const Navbar = (props) => {
    debugger;
    return (
        <nav>
            <NavLink to='/messages'>Messages</NavLink>
            <Outlet />
        </nav>
        
    );
    debugger;
};

export default Navbar;

/* <nav className={style.navbar}>
    <div className={style.item}>
        <a href='/profile'>Profile</a>
    </div>

    <div className={style.item}>

    </div>

    <div className={style.item}>
        <NavLink to='/news'>News</NavLink>
    </div>

    <div className={style.item}>
        <NavLink to='/music'>Music</NavLink>
    </div> <br> </br>

    <div className={style.item}>
        <NavLink to='/settings'>Settings</NavLink>
    </div>
</nav> */