import './Leaded.scss'

import { FilterTime } from '../../molecules/FilterTime/FilterTime';
import { Summary } from '../../atoms/Summary/Summary';
import { Filter } from '../../molecules/Filter/Filter';


export const Leaded = () => {
    return (
        <div className="ContainerLeaded">
            <Summary />
            <FilterTime />
            <Filter/>
        </div>
    );
}