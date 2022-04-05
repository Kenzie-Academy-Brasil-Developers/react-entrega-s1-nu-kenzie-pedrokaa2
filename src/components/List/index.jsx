import "./style.css";
import Card from "../Card";

const List = ({listTransactions}) => {
  return (
    <ul>
      {listTransactions.map((transaction, index) => {
        return (
          <Card 
            description = {transaction.description} 
            type = {transaction.type} 
            value = {transaction.value} 
            key = {index} 
          />
        )}
      )}
    </ul>
  )
}

export default List