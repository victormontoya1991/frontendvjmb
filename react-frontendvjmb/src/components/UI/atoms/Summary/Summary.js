import './Summary.scss'
import { BiInfoCircle } from "react-icons/bi";

export const Summary = ({name, dataFilter}) => {
    console.log (dataFilter);

    return (
        <section className="Summary">
            <aside className='TitleSummary'>
                <h4>Total de {name}</h4>
                <h3><BiInfoCircle /></h3>
            </aside>
            <aside className='TotalMonth'>
                <h2>$5000000</h2>
            </aside>
            <aside className='Month'>
                <p>Septiembre 2020</p>
            </aside>
        </section>
    );
}
