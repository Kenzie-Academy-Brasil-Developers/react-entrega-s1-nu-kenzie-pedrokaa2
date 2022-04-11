import "./style.css";
import LogoNuKenzie from '../../img/NuKenzie.svg'

const Header = ({setIsLoggedIn}) => {

  function handleLogin() {
    setIsLoggedIn(true)
  }

  return (
    <div className='headerLogo'>
      <div className='childrenHeader'>
        <img src={LogoNuKenzie} alt="Nu Kenzie" />
        <button
          onClick={handleLogin} className={"btnStart"}
        >
          Início
        </button>
      </div>
    </div>
  )
}

export default Header