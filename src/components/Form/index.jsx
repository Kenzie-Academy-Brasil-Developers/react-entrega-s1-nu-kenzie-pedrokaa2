import { useState } from "react";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descriptionList, setDescriptionList] = useState("");
  const [selectOption, setSelectOption] = useState("Entrada");
  const [valueBox, setValueBox] = useState(0);
  const HandleForm = () => {
    if (selectOption === "Entrada"){
      const objectForm = 
      {
        description: descriptionList,
        type: selectOption,
        value: Number(valueBox)
      }
      setListTransactions([...listTransactions, objectForm])
    } else if (selectOption === "Despesa"){
      const objectForm = 
      {
        description: descriptionList,
        type: selectOption,
        value: Number(-valueBox)
      }
      setListTransactions([...listTransactions, objectForm])
    }
  }
  return (
    <form className='formNuKenzie'
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <p
        className = 'descriptionParagraph'
      >
        Descrição
      </p>
      <input id='descriptionInput' type="text" placeholder="Digite aqui sua descrição" required 
        onChange = {(event) => {
          setDescriptionList(event.target.value)
        }}
      />
      <span id="spanExample" >Ex: Compra de roupas</span>
      <div className="totalValueForm">
        <div className = "valueBoxComplete">
          <p className="valueParagraph">Valor</p>
          <div id="valueMoneyBox">
            <input id="ValueBox" type="text" placeholder="1" required
              onChange = {(event) => {
                setValueBox(event.target.value)
              }}
            ></input>
            <div id="MoneySign">R$</div>
          </div>
        </div>
        <div className = "typeValueBoxComplete">
          <p className="valueParagraph">Tipo de Valor</p>
          <select name="" id="ValueSelect" required
            onChange = {(event) => {
              setSelectOption(event.target.value)
            }}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button
         id = "pinkButton"
         onClick = {() => {
           if (descriptionList !== ""){
             HandleForm()
           }
         }}
      >
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;