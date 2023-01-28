function TotalMoney({listTransactions}) {
    
        return (
            listTransactions.reduce((previousValue, currentValue)=>{
                return previousValue + currentValue.value
            },0)
        )

}

export default TotalMoney