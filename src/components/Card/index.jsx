import './style.css'

const Card = ({description, type, value, deleteList}) => {

  return (
    <li className = {type}>
      <div className = "cardList">
        <div className = "h3SpanValue">
          <h3 id = "h3TotalValue">
            {description}
          </h3>
          <span id = "spanValue">
            {type}
          </span>
        </div>
        <div className = "valueDivP">
          <p id = "valueParagraph">
            R$ {value.toFixed(2)}
          </p>
          <button className = "deleteButton"
            onClick = {()=> deleteList()}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  )
}

export default Card