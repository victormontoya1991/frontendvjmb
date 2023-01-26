import './TransactionList.scss'
import { FilterTime } from '../../molecules/FilterTime/FilterTime';
import { Summary } from '../../atoms/Summary/Summary';
import { dataRequest } from '../../../../helpers/dataRequest'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListItemTransaction from '../../molecules/ListItemTransaction/ListItemTransaction'
import { TitleFiltre } from '../../atoms/TitleFiltre/TitleFiltre'
import React from 'react';
import Popup from 'reactjs-popup';

const TransactionList = () => {
    // Promise Data
    const [transaction, setTransaction] = useState ([])
    const {name} = useParams()
    useEffect(()=>{
        dataRequest()
            .then((res)=>{
                setTransaction (res)
            })
            .catch((err)=>{
                <h1> Err Data Conect </h1>
            })
    },[name])
    // Filter Selection
    const [selectedFilter, setSelectedFilter] = useState({
        card:true,
        link:true,
    });
    const [dataTrans, setDateFilter] = useState ([]);
    const handleOnCheckbox = (e) =>{
        setSelectedFilter ({
            ...selectedFilter,
            [e.target.value]: e.target.checked,
        });
        if (e.target.checked){
            const resultFilter = transaction.filter(trans=> trans.transactionicon === e.target.value)
            setDateFilter([...dataTrans, ...resultFilter])
        }
        else{
            const resultFilter = dataTrans.filter(trans => trans.transactionicon !== e.target.value)
            setDateFilter([...resultFilter])
        }
    }
    // Filter Periodi
    const filterPeriodi = 
        (dataTrans.length === 0 )
        ? transaction
        : dataTrans;
    const {dateFilter} = useParams()
    const dataFilter= filterPeriodi.filter(trans => trans.date >= dateFilter)
    return (
        <section>
            <div className="ContainerLeaded">
                <Summary />
                <FilterTime />
                <section className="Filters">
                    <Popup 
                        trigger={ open =>(
                            <button type="button" className="button">
                            Filtros
                            </button>
                        )}
                        position={'bottom center'}
                        closeOnDocumentClick
                        >
                        <div className="letCheckbox">
                            <div className="letCheck">
                                <input type="checkbox" id="filter-list" value="card" onChange={handleOnCheckbox} /> 
                                <label htmlFor='card'>
                                    Pago tarjeta
                                </label>
                            </div>
                            <div  className="letCheck">
                                <input type="checkbox" id="filter-list"value="link" onChange={handleOnCheckbox} /> 
                                <label htmlFor='link'>
                                    Link de pago
                                </label>
                            </div>
                        </div>
                    </Popup>
                </section>
            </div>
            <div className='ContainerTransactionList'>
                <section className='TransactionList'>
                    <TitleFiltre name={name} />
                    {
                        (dataFilter.length===0)
                            ?<ListItemTransaction  dataFilter={filterPeriodi.sort((a, b) => b.date.localeCompare(a.date))} />
                            :<ListItemTransaction  dataFilter={dataFilter.sort((a, b) => b.date.localeCompare(a.date))} />
                    }
                    
                </section>
            </div>
        </section>
    );
}

export default TransactionList;
