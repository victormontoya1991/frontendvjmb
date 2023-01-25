import './TitleFiltre.scss'

export const TitleFiltre = ({name}) => {
    return ( 
        <div className="TitleFiltre">
            {
                !name
                    ?<h3 className="FiltreTT"> Tus ventas de Septiembre </h3>
                    :<h3 className="FiltreTT"> Tus ventas de {name}</h3>
            }
        </div>
    );
}