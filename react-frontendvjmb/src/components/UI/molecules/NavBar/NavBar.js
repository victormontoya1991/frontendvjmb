import './NavaBar.scss'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">Mi negocio</Link>
            <a href="https://ayuda.bold.co/lang/es/">Ayuda</a>
        </nav>
    );
}

