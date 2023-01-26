import { useState } from 'react'
import ListItemTransaction from '../ListItemTransaction/ListItemTransaction';

export const Filter = ({transaction}) => {
    const [selectedFilter, setSelectedFilter] = useState({
        Declinado:false,
        Exitoso:false,
    });
    const [datesFilter, setDateFilter] = useState ([]);
    const handleOnCheckbox = (e) =>{
        setSelectedFilter ({
            ...selectedFilter,
            [e.target.value]: e.target.checked,
            
        });
        if (e.target.checked){
            const resultFilter = transaction.filter(trans=> trans.transaction === e.target.value)
            setDateFilter([...datesFilter, ...resultFilter])
        }else{
            const resultFilter = datesFilter.filter(trans => trans.transaction !== e.target.value)
            setDateFilter([...resultFilter])
        }
    }
    return ( 
        <section>
            <div>
                <input type="checkbox" id="filter-list" onChange={handleOnCheckbox} value="Exitoso"/> 
                <label htmlFor='Exitoso'>
                    Exitoso
                </label>
            </div>
            <div>
                <input type="checkbox" id="filter-list" onChange={handleOnCheckbox} value="Declinado"/> 
                <label htmlFor='Delinado'>
                    Declinado
                </label>
            </div>
            <ListItemTransaction datesFilter={datesFilter.sort((a, b) => b.date.localeCompare(a.date))}/>
        </section>
    );
}
