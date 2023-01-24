
const ItemTransaction = ( {id , transactionicon , card , cardnumb , date , hour , amount , deduction , transaction }) => {
    return(
        <div className='CardIten'>
            <p>{id}</p>
            <p>{transactionicon}</p>
            <p>{card}</p>
            <p>{cardnumb}</p>
            <p>{date}</p>
            <p>{hour}</p>
            <p>{amount}</p>
            <p>{deduction}</p>
            <p>{transaction}</p>
        </div>
    )
}

export default ItemTransaction

