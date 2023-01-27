import './Summary.scss'
import { BiInfoCircle } from "react-icons/bi";

export const Summary = ({name, dataFilter}) => {
    const exitFilter= dataFilter.filter(trans => trans.transaction === "Exitoso");
    const totalSale = exitFilter.reduce((acumulador, actualiti) => acumulador + actualiti.amount, 0);
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    const sume = formatterPeso.format(totalSale)
    return (
        <section className="Summary">
            <aside className='TitleSummary'>
                {
                    !name
                        ?<h4> Total de Septiembre </h4>
                        :<h4> Total de {name}</h4>
                }
                <h3><BiInfoCircle /></h3>
            </aside>
            <aside className='TotalMonth'>
                <h2>{sume}</h2>
            </aside>
            <aside className='Month'>
                <p>Septiembre 2022</p>
            </aside>
        </section>
    );
}
