import './Brand.scss'
import { Link } from "react-router-dom";
import LogoBrand from "../../../../assets/img/logo-white.webp"
export const Brand = () => {
    return (  
        <div className="LogoBrand">
            <Link to="/">
                <img alt="Bold Brand" src= { LogoBrand }/> 
            </Link>
        </div>
    );
}
