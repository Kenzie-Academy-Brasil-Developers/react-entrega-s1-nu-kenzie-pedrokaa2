import NuKenzieBranco from "../../img/NuKenzieBranco.svg"
import Section from "../../img/Section.png"
import "./style.css"

const HomePage = ({ setIsLoggedIn }) => {

    function handleLogout() {
      setIsLoggedIn(false)
    }

    return (
        <div className = "homePageComplete">
          <div className="nuKenzieOne">
            <img src={NuKenzieBranco} alt="NuKenzie" />
            <h2>Centralize o controle das suas finanças</h2>
            <span>de forma rápida e segura</span>
            <button
              onClick={handleLogout} className={"btnStartHome"}
            >
              Iniciar
            </button>
          </div>

          <div className="nuKenzieTwo">
            <img src={Section} alt="PageHome" />
          </div>
        </div>
    )
}

export default HomePage