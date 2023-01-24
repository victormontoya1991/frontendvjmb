import './Leaded.scss'

export const Leaded = () => {
    return (
        <div className="ContainerLeaded">
            <section className="SummaryMonth">
                <aside className='TitleSummary'>
                    <h4>Total de ventas en MES</h4>
                    <h3>ico</h3>
                </aside>
                <aside>
                    <h2>$ 5000000</h2>
                </aside>
                <aside>
                    <p>Fecha</p>
                </aside>
            </section>
            <section className="FilterTime">
                <li>Hoy</li>
                <li>Esta Semana</li>
                <li>Septiembre</li>
            </section>
            <section className="Filters">
                <li>Filtrar</li>
                <h3>Ico</h3>
            </section>
        </div>
    );
}