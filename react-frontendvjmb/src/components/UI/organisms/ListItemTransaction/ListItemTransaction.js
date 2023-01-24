import ItemTransaction from "../../molecules/ItemTransaction/ItemTransaction"

const ListItemTransaction = ({transaction}) => {
    return(
        <div className='PageListProducts'>
            { transaction.map ((trans) => <ItemTransaction key={trans.id} {...trans}/>)}
        </div>
    )
}
export default ListItemTransaction