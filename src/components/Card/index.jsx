import './style.css'

const Card = ({description, type, value, index}) => {
  return (
    <li className = {type}>
      <div>
        <h3>
          {description}
        </h3>
        <span>
          {type}
        </span>
      </div>
      <div>
        <p>
          {value}
        </p>
        <button>
          <i class="fa-thin fa-trash"></i>
        </button>
      </div>
    </li>
  )
}

export default Card