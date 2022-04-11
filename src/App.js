import { useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import Header from './components/Header';
import Encapsulate from './components/Encapsulate';
import HomePage from './components/HomePage';

function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  function deleteList(item){
    const filteredItem = listTransactions.filter((elem) => {
      return elem !== item
    }) 
    setListTransactions(filteredItem)
  }

  return (
    <div>
      {isLoggedIn ? (
        <HomePage
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <div className="App">
        <Header
          setIsLoggedIn={setIsLoggedIn}
        />
        <Encapsulate>
          <div className = "FormMoneyFlex">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <TotalMoney
              listTransactions={listTransactions}
            />
          </div>
            <List
              listTransactions={listTransactions}
              deleteList = {deleteList}
            />
        </Encapsulate>
      </div>
      )}
    </div>
  );
}

export default App;