import './TransactionList.scss'
import { dataRequest } from '../../../../helpers/dataRequest'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListItemTransaction from '../../molecules/ListItemTransaction/ListItemTransaction'
import { TitleFiltre } from '../../atoms/TitleFiltre/TitleFiltre'

const TransactionList = () => {
    const [transaction, setTransaction] = useState ([])
    const {dateFilter, name} = useParams()
    useEffect(()=>{
        dataRequest()
            .then((res)=>{
                if (dateFilter){
                    setTransaction ( res.filter(trans => trans.date >= dateFilter))
                }else{
                    setTransaction (res)
                }
            })
            .catch((err)=>{
                <h1> Err Data Conect </h1>
            })
    },[dateFilter, name])
    return (
        <div className='ContainerTransactionList'>
            <section className='TransactionList'>
                <TitleFiltre name={name} />
                <ListItemTransaction transaction={transaction}/>
            </section>
        </div>
    );
}

export default TransactionList;