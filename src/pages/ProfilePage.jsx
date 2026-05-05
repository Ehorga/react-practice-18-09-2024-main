
import { NavLink, Outlet } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <section>
            <nav>
                <ul>
                    <li><NavLink to="/info">info</NavLink></li>
                    <li><NavLink to="/setting">settings</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </section>
    );
}

export default ProfilePage;
