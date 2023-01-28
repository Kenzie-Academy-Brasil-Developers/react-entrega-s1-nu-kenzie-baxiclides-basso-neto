import { useState } from 'react'
import './reset.css'
import './app.css'
import RegisterSpents from './Components/RegisterSpents'
import './Components/List'
import List from './Components/List'
import TotalMoney from './Components/TotalMoney/totalmoney'

function App() {
  
const [listTransactions, setListTransactions] = useState([])

  return (
    
    <div className="App">
        <header className='header__app'>
          <h1><span>Nu  </span>Kenzie</h1>
          <button>Inicio</button>
        </header>
      <div className='app__container'>
        <main>
          <div className='main__container'>
            <RegisterSpents listTransactions={listTransactions} setListTransactions={setListTransactions} />
          </div>
        </main>
        <footer className='footer'>
          <h2>Resumo financeiro</h2>
        
        
              <List  listTransactions={listTransactions} />
        
        </footer>
      </div>

      
    </div>
  )
}

export default App

