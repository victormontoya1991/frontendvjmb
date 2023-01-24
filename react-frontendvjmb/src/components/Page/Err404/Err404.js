import './Error.scss'
import { Link } from "react-router-dom";

const ErroPage = () => {
    return ( 
        <div className='err'>
            <h1>"Upss..."</h1>
            <Link className='ButtonErr' to="/">Ir a Home</Link>
        </div>
    );
}

export default ErroPage;