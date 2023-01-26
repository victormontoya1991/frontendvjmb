import './Filter.scss'
import React from 'react';
import Popup from 'reactjs-popup';

export const Filter = ( OnCheckbox ) => {
    return ( 
        <section className="Filters">
            <Popup 
                trigger={ open =>(
                    <button type="button" className="button">
                    Filtros
                    </button>
                )}
                position={'bottom center'}
                closeOnDocumentClick
                >
                <div className="letCheckbox">
                    <div className="letCheck">
                        <input type="checkbox" id="filter-list" value="card" onClick={OnCheckbox}/> 
                        <label htmlFor='card'>
                            Pago tarjeta
                        </label>
                    </div>
                    <div  className="letCheck">
                        <input type="checkbox" id="filter-list"value="link" onClick={OnCheckbox}/> 
                        <label htmlFor='link'>
                            Link de pago
                        </label>
                    </div>
                </div>
            </Popup>
        </section>
    );
}
