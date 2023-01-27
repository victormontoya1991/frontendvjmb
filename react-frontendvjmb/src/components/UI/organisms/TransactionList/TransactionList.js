import './TransactionList.scss'
import { FilterTime } from '../../molecules/FilterTime/FilterTime';
import { Summary } from '../../atoms/Summary/Summary';
import { dataRequest } from '../../../../helpers/dataRequest'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TitleFiltre } from '../../atoms/TitleFiltre/TitleFiltre'
import ListItemTransaction from '../../molecules/ListItemTransaction/ListItemTransaction'
import React from 'react';
import Popup from 'reactjs-popup';
import { BiAbacus } from "react-icons/bi";

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
        card:false,
        link:false
    });
    //Load LocaStorege
    useEffect(() => {
        localStorage.setItem("nameFilter", JSON.stringify(selectedFilter));
    }, [selectedFilter]);
    const [dataTrans, setDateFilter] = useState ([]);
    const handleOnCheckbox = (e) =>{
        setSelectedFilter ({
            ...items,
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
    //Dow LocaStorege
    const [items, setItems] = useState([]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('nameFilter'));
        if (items) {
        setItems(items);
        }
    }, [selectedFilter]);
    // Filter Periodi
    const filterPeriodi = 
        (dataTrans.length === 0 )
        ? transaction
        : dataTrans;
    const {dateFilter} = useParams()
    const dataFilter= filterPeriodi.filter(trans => trans.date >= dateFilter)
    // Date Summary
    const summaryFilter= transaction.filter(trans => trans.date >= dateFilter)
    // Rederizado
    return (
        <section>
            <div className="ContainerLeaded">
                {
                    (dataFilter.length===0)
                        ? <Summary dataFilter={transaction} name={name} />
                        : <Summary dataFilter={summaryFilter} name={name} />
                }
                <FilterTime />
                <section className="Filters">
                    <Popup 
                        trigger={ open =>(
                            <button type="button" className="button">
                            Filtros
                            <h3><BiAbacus /></h3>
                            </button>
                        )}
                        position={'bottom center'}
                        closeOnDocumentClick
                        >
                        <div className="letCheckbox">
                            <div className="letCheck">
                                {
                                    (items.card === false)
                                        ?<input type="checkbox" id="filter-list" value="card" onChange={handleOnCheckbox} />
                                        :<input type="checkbox" id="filter-list" value="card" onChange={handleOnCheckbox} defaultChecked />  
                                }
                                <label htmlFor='card'>
                                    Pago tarjeta
                                </label>
                            </div>
                            <div  className="letCheck">
                                {
                                    (items.link === false)
                                        ?<input type="checkbox" id="filter-list" value="link" onChange={handleOnCheckbox} />
                                        :<input type="checkbox" id="filter-list" value="link" onChange={handleOnCheckbox} defaultChecked />  
                                }
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
