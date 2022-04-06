import { useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import Header from './components/Header';
import Encapsulate from './components/Encapsulate';

function App() {
  const [listTransactions, setListTransactions] = useState([])
  return (
    <div className="App">
      <Header/>
      <Encapsulate>
        <div className = "FormMoneyFlex">
          <Form
            listTransactions = {listTransactions}
            setListTransactions = {setListTransactions}
          />
          <TotalMoney
            listTransactions = {listTransactions}
          />
        </div>
          <List
            listTransactions = {listTransactions}
          />
      </Encapsulate>
    </div>
  );
}

export default App;