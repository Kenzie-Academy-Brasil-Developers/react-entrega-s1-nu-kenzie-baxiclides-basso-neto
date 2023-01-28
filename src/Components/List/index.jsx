import './list.css'
import { useState } from "react";
import TotalMoney from '../TotalMoney/totalmoney';

function List({listTransactions}) {

    // JS - FORA DO RETURN

     return(
    //   JSX - DENTRO DO RETURN
            <div className="list__container">
                <ul>
                {listTransactions.length > 0 ?(
                    <>
                    <div className='list__value'>
                        <h2>ValorTotal: <span className='totalMoney'>R$
                            <TotalMoney listTransactions={listTransactions}/>
                        </span></h2>
                                   <span>O Valor se refere ao saldo</span>
                    </div>
                        {listTransactions.map((listItem, index )=>(
                            <><li className='itemList' key={index}>
                                <h3>{listItem.description}</h3>
                                <span>{listItem.type}</span>
                                <h4>R${listItem.value},00</h4>
                                <img src="src/assets/trashicon.png" alt="delte icon" />
                            </li>
                         </>
                        )
                        )}
                </>
                ):(
                    <h3 className='noItens'>Você ainda não possui nenhum lançamento</h3>
                )}
                </ul>
            
                
            </div>
    
     )
}

export default List

