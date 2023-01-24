import './ListItemTrasaction.scss'
import ItemTransaction from "../../atoms/ItemTransaction/ItemTransaction"
import { TitleTabla } from '../../atoms/TitleTabla/TitleTabla'
import { TitleFiltre } from '../../atoms/TitleFiltre/TitleFiltre'

const ListItemTransaction = ({transaction}) => {
    return(
        <div className='PageListProducts'>
            <TitleFiltre />
            <TitleTabla />
            <div className='Scroll'>
                { transaction.map ((trans) => <ItemTransaction key={trans.id} {...trans}/>)}
            </div>
        </div>
    )
}
export default ListItemTransaction