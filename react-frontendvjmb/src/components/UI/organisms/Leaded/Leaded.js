import './Leaded.scss'
import { BiInfoCircle } from "react-icons/bi";

export const Leaded = () => {
    return (
        <div className="ContainerLeaded">
            <section className="SummaryMonth">
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
            <section className="FilterTime">
                <a>Hoy</a>
                <a>Esta Semana</a>
                <a>Septiembre</a>
            </section>
            <section className="Filters">
                <li>Filtrar</li>
                <h3>Ico</h3>
            </section>
        </div>
    );
}