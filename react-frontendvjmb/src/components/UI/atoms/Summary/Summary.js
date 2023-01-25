import './Summary.scss'
import { BiInfoCircle } from "react-icons/bi";

export const Summary = () => {
    return (
        <section className="Summary">
            <aside className='TitleSummary'>
                <h4>Total de ventas en MES</h4>
                <h3><BiInfoCircle /></h3>
            </aside>
            <aside className='TotalMonth'>
                <h2>$5000000</h2>
            </aside>
            <aside className='Month'>
                <p>Fecha</p>
            </aside>
        </section>
    );
}
