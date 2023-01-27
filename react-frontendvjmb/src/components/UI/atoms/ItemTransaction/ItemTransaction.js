import './ItemTransaction.scss';
import { BiCalculator, BiLinkAlt } from "react-icons/bi";
const cardType = require.context('../../../../assets/img',true);

const ItemTransaction = ( {id , transactionicon , card , cardnumb , date , hour , amount, transaction, deduction }) => {
    const mone = amount;
    const dedu = deduction;
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    const amountmone = formatterPeso.format(mone)
    const dedumone = formatterPeso.format(dedu)
    return(
        <div className='ItemTransaction'>
            <section className='Transaction'>
                    {
                        (transactionicon) === "link"
                            ?<h3><BiLinkAlt /></h3>
                            :<h3><BiCalculator/></h3>
                    }
                    <p>{transaction}</p>
                </section>
                <p className='Date'>{date} - {hour}</p>
                <section className='Card'>
                    <img src={cardType(`./${card}.png`)}
                        alt="card"
                    />
                    <p className='CardNumb'>{cardnumb}</p>
                </section>
                <p className='Id'>{id}</p>
                <section className='Amount'>
                    <h6>{amountmone}</h6>
                        {
                            (deduction) > 0
                                ?<aside>
                                    <p className='TitleAmaunt'>Deducción Bold</p>
                                    <p className='Deduction'>-{dedumone}</p>
                                </aside>
                                :null
                        }
                </section>
        </div>
    )
}

export default ItemTransaction

