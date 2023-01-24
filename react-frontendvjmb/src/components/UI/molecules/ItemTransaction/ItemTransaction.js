import './ItemTransaction.scss'

const ItemTransaction = ( {id , transactionicon , card , cardnumb , date , hour , amount , deduction , transaction }) => {
    return(
        <div className='ItemTransaction'>
            <section>
                {transactionicon}
                <p>{transaction}</p>
            </section>
            <p>{date} - {hour}</p>
            <section>
                {card}
                <p>{cardnumb}</p>
            </section>
            <p className='Id'>{id}</p>
            <section>
                <h6>${amount}</h6>
                <p>Deduccción Bold</p>
                <p>-${deduction}</p>
            </section>
        </div>
    )
}

export default ItemTransaction

