import './TransactionList.scss'
import { dataRequest } from '../../../../helpers/dataRequest'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListItemTransaction from '../../molecules/ListItemTransaction/ListItemTransaction'
import { TitleFiltre } from '../../atoms/TitleFiltre/TitleFiltre'

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
        <div className='ContainerTransactionList'>
            <div>
                <input type="checkbox" id="filter-list" onChange={handleOnCheckbox} value="card"/> 
                <label htmlFor='card'>
                    Pago Tarjeta
                </label>
                <input type="checkbox" id="filter-list" onChange={handleOnCheckbox} value="link"/> 
                <label htmlFor='link'>
                    Link Pago
                </label>
            </div>
            <section className='TransactionList'>
                <TitleFiltre name={name} />
                {
                    (dataFilter.length===0)
                        ?<ListItemTransaction  dataFilter={filterPeriodi.sort((a, b) => b.date.localeCompare(a.date))} />
                        :<ListItemTransaction  dataFilter={dataFilter.sort((a, b) => b.date.localeCompare(a.date))} />
                }
                
            </section>
        </div>
    );
}

export default TransactionList;
