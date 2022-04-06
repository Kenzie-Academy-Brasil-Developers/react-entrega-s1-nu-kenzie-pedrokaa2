import './style.css'

const TotalMoney = ({listTransactions}) => {
  return (
    <div className = "totalMoneyBox">
      <div className = "h3SpanValue">
        <h3 id = "h3TotalValue">
          Valor Total:
        </h3>
        <span id = "spanValue">
          O valor se refere ao saldo
        </span>
      </div>
      <p id = "totalMoneyPinkParagraph">
        R$ {listTransactions.reduce((initialValue, currentValue) => {
          return initialValue + currentValue.value
        }, 0)}
      </p>
    </div>
  )
}

export default TotalMoney