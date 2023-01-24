import './ItemTransaction.scss'
const cardType = require.context('../../../../assets/img',true);

const ItemTransaction = ( {id , transactionicon , card , cardnumb , date , hour , amount, transaction, deduction }) => {
    return(
        <div className='ItemTransaction'>
            <section className='Transaction'>
                {
                    transactionicon === "link"
                        ?<aside><p>Deducción</p></aside>
                        :<aside><p>Card</p></aside>
                }
                <p>{transaction}</p>
            </section>
            <p className='Date'>{date} - {hour}</p>
            <section className='Card'>
                <img src={cardType(`./${card}.png`)}
                    alt="card"
                />
                <p>{cardnumb}</p>
            </section>
            <p className='Id'>{id}</p>
            <section className='Amount'>
                <h6>${amount}</h6>
                    {
                        deduction > 0
                            ?<aside>
                                <p>Deducción Bold</p>
                                <p>${deduction}</p>
                            </aside>
                            :null
                    }
            </section>
        </div>
    )
}

export default ItemTransaction

