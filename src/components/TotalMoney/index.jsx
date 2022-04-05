import './style.css'

const TotalMoney = ({listTransactions}) => {
  return (
    <>
      <div>
        <h3>
          Valor Total
        </h3>
        <span>
          O valor se refere ao saldo
        </span>
      </div>
      <p>
        {listTransactions.reduce((initialValue, currentValue) => {
          return initialValue + currentValue.value
        }, 0)}
      </p>
    </>
  )
}

export default TotalMoney