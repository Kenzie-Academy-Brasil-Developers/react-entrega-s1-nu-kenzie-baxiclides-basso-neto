import { useState } from 'react'
import './reset.css'
import './app.css'
import RegisterSpents from './Components/RegisterSpents/register'
import './Components/List/list'
import List from './Components/List/list'
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  
const [listTransactions, setListTransactions] = useState([])
const [page, setPages] = useState('LandingPage')

  return (
    
      <div className="App">
      <>
        {page === 'LandingPage' ? ( 
      <LandingPage />
        ): page === 'Dashboard' (
      <><header className='header__app'>
            <h1><span>Nu  </span>Kenzie</h1>
            <button type='button' onClick={()=>setPages('LandingPage')}>Inicio</button>
          </header><div className='app__container'>
              <main>
                <div className='main__container'>
                  <RegisterSpents listTransactions={listTransactions} setListTransactions={setListTransactions} />
                </div>
              </main>
              <footer className='footer'>
                <h2>Resumo financeiro</h2>


                <List key={listTransactions.id} listTransactions={listTransactions} />

              </footer>
            </div></>
        )}
        </>
    </div>
  )
}

export default App
