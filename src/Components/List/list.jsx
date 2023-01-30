import "./list.css";
import TotalMoney from "../TotalMoney/totalmoney";

function List({ listTransactions }) {
  return (
    <div className="list__container">
      <ul>
        {listTransactions.length > 0 ? (
          <>
            <TotalMoney listTransactions={listTransactions} />
            {listTransactions.map((listItem, id) => (
              <li className="itemList" key={listItem.id}>
                <h3>{listItem.description}</h3>
                <span>{listItem.type}</span>
                <h4>R${listItem.value},00</h4>
                <img
                  src="src/assets/trashicon.png"
                  alt="delete icon"
                />
              </li>
            ))}
          </>
        ) : (
          <h3 className="noItens">Você ainda não possui nenhum lançamento</h3>
        )}
      </ul>
    </div>
  );
}

export default List;
