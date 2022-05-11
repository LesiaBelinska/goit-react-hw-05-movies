import { Navigation } from "components/Navigation/Navigation.jsx";
import s from "./AppBar.module.css";

export const AppBar = () => {
    return (
        <header className={s.header}>
            <Navigation />
        </header>
    );
}