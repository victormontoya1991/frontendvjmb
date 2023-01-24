import './TransactionList.scss'
import { dataRequest } from '../../../helpers/dataRequest'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListItemTransaction from '../../UI/organisms/ListItemTransaction/ListItemTransaction'

const TransactionList = () => {
    const [transaction, setTransaction] = useState ([])
    const {dateFilter} = useParams()
    useEffect(()=>{
        dataRequest()
            .then((res)=>{
                if ( dateFilter ){
                    setTransaction ( res.filter(trans => trans.date === dateFilter))
                }else {
                    setTransaction (res)
                }
            })
            .catch((err)=>{
                <h1> Err Data Conect </h1>
            })
    },[dateFilter])
    return (
        <div className='ContainerTransactionList'>
            <ListItemTransaction transaction={transaction}/>
        </div>
    );
}

export default TransactionList;