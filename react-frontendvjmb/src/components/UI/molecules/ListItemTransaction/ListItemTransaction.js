import './ListItemTrasaction.scss'
import ItemTransaction from "../../atoms/ItemTransaction/ItemTransaction"
import { TitleTabla } from '../../atoms/TitleTabla/TitleTabla'

const ListItemTransaction = ({dataFilter}) => {
    return(
        <div className='PageListProducts'>
            <TitleTabla />
            <div className='Scroll'>
                {dataFilter.map ((trans) => <ItemTransaction key={trans.id} {...trans}/>)}
            </div>
        </div>
    )
}
export default ListItemTransaction