import { useState } from 'react'
import './register.css'
function RegisterSpents({listTransactions, setListTransactions}) {
    const [description, setDescription] = useState()
    const [value, setValue] = useState()
    const [type, setType] = useState("Entrada")
    const [object, setObject] = useState()
        
    function handleSubmit(event) {
        event.preventDefault()
        const newObj = {
            description: description,
            value: Number(value),
            type: type
        }

        const newList = [... listTransactions, newObj]
        setListTransactions(newList)
   }

    return(
    
        <form onSubmit={handleSubmit} className='container__form'>
            
            <label htmlFor="description">Descrição:</label>
            <input type="text" id="description" placeholder="Digite aqui sua descrição" onChange={(event) => setDescription(event.target.value)} />
            <span>Ex: Compra de roupas</span>
        
            <label htmlFor="value">Valor</label>
        <div className='container__valueAndType'>
            <input type="text" id="valor" onChange={(event) => setValue(event.target.value)} />
            <div className='boxCifrao'>R$</div>
            <select defaultValue= "Entrada"  onChange={(event) => setType(event.target.value)}  name="type" id="">
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
            </select>
        </div>
        
            <button type='submit'>Inserir Valor</button>
        
        </form>
    )
}
export default RegisterSpents
