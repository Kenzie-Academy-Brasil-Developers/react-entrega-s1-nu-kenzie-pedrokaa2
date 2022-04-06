import './style.css'

const Card = ({description, type, value, index}) => {
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
        </div>
      </div>
    </li>
  )
}

export default Card