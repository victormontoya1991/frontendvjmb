import './NavaBar.scss'
import { Link } from "react-router-dom";
import { BiInfoCircle } from "react-icons/bi";

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">Mi negocio</Link>
            <a  href="https://ayuda.bold.co/lang/es/">
            Ayuda
            <h3><BiInfoCircle /></h3>
            </a>
        </nav>
    );
}

