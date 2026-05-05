
import { NavLink } from 'react-router-dom';
import styles from "./Menu.module.scss"
const Menu = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink to = "/">home</NavLink></li>
                <li><NavLink to = "/quiz">Quiz</NavLink></li>
                <li><NavLink to = "/shop">Shop</NavLink></li>
                <li><NavLink to = "/profile">Profile</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;
