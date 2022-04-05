import "./style.css";
import LogoNuKenzie from '../../img/NuKenzie.svg'

const Header = () => {
  return (
    <>
      <div>
        <img src={LogoNuKenzie} alt="Nu Kenzie" />
        <button>Início</button>
      </div>
    </>
  )
}

export default Header