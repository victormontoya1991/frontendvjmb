import { Brand } from '../../atoms/Brand/Brand';
import { NavBar } from '../../molecules/NavBar/NavBar';
import './Headers.scss';

export const Header = () => {
    return ( 
        <header>
            <Brand />
            <NavBar />
        </header>
    );
}