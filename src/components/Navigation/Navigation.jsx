import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <nav>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink
                        to="/"
                        className={({isActive})=> isActive ? `${s.activeLink}` : `${s.link}`}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/movies"
                        className={({isActive})=> isActive ? `${s.activeLink}` : `${s.link}`}
                    >
                        Movies
                    </NavLink></li>
            </ul>
        </nav>
    );
};