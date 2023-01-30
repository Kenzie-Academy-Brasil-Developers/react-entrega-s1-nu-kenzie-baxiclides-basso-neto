function TotalMoney({ listTransactions }) {
  const total = listTransactions.reduce((previousValue, currentItem) => {
    if (currentItem.type === "Entrada") {
      return previousValue + currentItem.value;
    } else if (currentItem.type === "Saída") {
      return previousValue - currentItem.value;
    }
  }, 0);

  return (
    <div className="list__value">
      <h2>
        ValorTotal:
        <span className="totalMoney">
          R$
          {total}
        </span>
      </h2>
      <span>O Valor se refere ao saldo</span>
    </div>
  );
}

export default TotalMoney;
