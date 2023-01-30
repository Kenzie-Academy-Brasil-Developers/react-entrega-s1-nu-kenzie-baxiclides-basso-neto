import { useState } from "react";
import "./register.css";
import { v4 as uuid } from "uuid";
function RegisterSpents({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState("Entrada");

  function handleSubmit(event) {
    event.preventDefault();
    const newObj = {
      description: description,
      value: Number(value),
      type: type,
      id: uuid(),
    };

    const newList = [...listTransactions, newObj];
    setListTransactions(newList);

    setDescription("");
    setValue("");
    setType("Entrada");
  }

  return (
    <form onSubmit={handleSubmit} className="container__form">
      <label htmlFor="description">Descrição:</label>
      <input
        type="text"
        id="description"
        value={description}
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setDescription(event.target.value)}
      />
      <span>Ex: Compra de roupas</span>

      <label className="value" htmlFor="value">
        Valor
      </label>
      <div className="container__valueAndType">
        <input
          type="text"
          id="valor"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className="boxCifrao">R$</div>
        <select
          onChange={(event) => setType(event.target.value)}
          name="type"
          id="type"
          value={type}
        >
          <option>Entrada</option>
          <option>Saída</option>
        </select>
      </div>

      <button type="submit">Inserir Valor</button>
    </form>
  );
}
export default RegisterSpents;
