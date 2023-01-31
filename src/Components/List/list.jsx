import "./list.css";
import TotalMoney from "../TotalMoney/totalmoney";
import { StyledItemList } from "./style";

function List({ listTransactions, removeItem }) {
  
  return (
    <div className="list__container">
      <ul>
        {listTransactions.length > 0 ? (
          <>
            <TotalMoney listTransactions={listTransactions} />
            {listTransactions.map((listItem, id) => (
              <StyledItemList borderColor={listItem.type === 'Entrada' ? 'green' : 'gray'} key={listItem.id}>
                <h3>{listItem.description}</h3>
                <span>{listItem.type}</span>
                <h4>R${listItem.value},00</h4>
                <img id={listItem.id} onClick={removeItem}
                  src="src/assets/trashicon.png"
                  alt="delete icon"
                />
              </StyledItemList>
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
