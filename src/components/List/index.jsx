import "./style.css";
import Card from "../Card";
import NoCard from '../../img/NoCard.svg'

const List = ({listTransactions, deleteList}) => {
  return (
    <div>
      {listTransactions.length === 0 ? (
        <div>
          <p className="ListParagraph">
            Você ainda não possui nenhum lançamento
          </p>
          <img className="ListImage"
            src={NoCard} alt="No Card" 
          />
        </div>
      ) :
        <ul className = "list">
          {listTransactions.map((transaction, index) => {
            return (
                <Card
                  description = {transaction.description}
                  type = {transaction.type}
                  value = {transaction.value}
                  key = {index}
                  deleteList = {()=> deleteList(transaction)}
                />
            )}
          )}
        </ul>
        }
    </div>
    
  )
}

export default List