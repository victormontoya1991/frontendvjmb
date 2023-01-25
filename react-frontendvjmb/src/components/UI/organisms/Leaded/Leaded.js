import './Leaded.scss'

import { FilterTime } from '../../molecules/FilterTime/FilterTime';
import { Summary } from '../../atoms/Summary/Summary';


export const Leaded = () => {
    return (
        <div className="ContainerLeaded">
            <Summary />
            <FilterTime />
            <section className="Filters">
                <li>Filtrar</li>
                <h3>Ico</h3>
            </section>
        </div>
    );
}