import React from 'react'
import s from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.element}>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={s.element}>
                <Link to='/dialog'>Messages</Link>
            </div>
            <div className={s.element}>
                <a href="">News</a>
            </div>
            <div className={s.element}>
                <a href="">Music</a>
            </div>
            <div className={s.element}>
                <a href="">Settings</a>
            </div>
        </nav>
    )
}
export default Nav
