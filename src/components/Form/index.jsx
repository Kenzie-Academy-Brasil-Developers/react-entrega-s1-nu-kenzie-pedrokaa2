import { useState } from "react";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descriptionList, setDescriptionList] = useState("Sem Descrição");
  const [selectOption, setSelectOption] = useState("entrada");
  const [valueBox, setValueBox] = useState(0);
  const HandleForm = () => {
    const objectForm = 
    {
      description: descriptionList,
      type: selectOption,
      value: Number(valueBox)
    }
    setListTransactions([...listTransactions, objectForm])
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <p>Descrição</p>
      <input type="text" placeholder="Digite aqui sua descrição" 
        onChange = {(event) => {
          setDescriptionList(event.target.value)
        }}
      />
      <span>Ex: Compra de roupas</span>
      <p>Valor</p>
      <div id="valueMoneyBox">
        <input type="text" placeholder="1"
          onChange = {(event) => {
            setValueBox(event.target.value)
          }}
        ></input>
        <div>R$</div>
      </div>
      <p>Tipo de Valor</p>
      <select name="" id="" required
        onChange = {(event) => {
          setSelectOption(event.target.value)
        }}
      >
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </select>
      <button
         onClick = {() => HandleForm()}
      >
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;