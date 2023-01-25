import './FilterTime.scss'
import { NavLink } from 'react-router-dom';

export  const FilterTime = () => {
    return (
        <section className="FilterTime">
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/filter/09-29-2022/Hoy"
                >Hoy</NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/filter/09-21-2022/esta Semana"
                >Esta Semana</NavLink>
            <NavLink 
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/filter/09-01-2022/Septiembre"
                >Septiembre</NavLink>
        </section>
    );
}