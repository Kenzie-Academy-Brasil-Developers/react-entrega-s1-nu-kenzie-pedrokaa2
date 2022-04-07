import "./style.css";
import LogoNuKenzie from '../../img/NuKenzie.svg'

const Header = () => {
  return (
    <div className='headerLogo'>
      <div className='childrenHeader'>
        <img src={LogoNuKenzie} alt="Nu Kenzie" />
        <button>Início</button>
      </div>
    </div>
  )
}

export default Header