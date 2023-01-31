import { useState } from 'react'
import './reset.css'
import './app.css'
import RegisterSpents from './Components/RegisterSpents/register'
import './Components/List/list'
import List from './Components/List/list'
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  
const [listTransactions, setListTransactions] = useState([])
const [page, setPages] = useState('Dashboard')

function removeItem(event) {
  console.log(event.target.id)
  const newList = listTransactions.filter((item)=>{
    return item.id !== event.target.id
  })
  setListTransactions(newList)
}

  return (
    
      <div className="App">
      <>
        {page === 'LandingPage' ? ( 
      <LandingPage setPages={setPages} />
        ): 
      <><header className='header__app'>
            <h1><span>Nu  </span>Kenzie</h1>
            <button type='button' onClick={()=>setPages('LandingPage')}>Inicio</button>
          </header>
          <div className='app__container'>
              <main>
                <div className='main__container'>
                  <RegisterSpents listTransactions={listTransactions} setListTransactions={setListTransactions} />
                </div>
              </main>
              <footer className='footer'>
                <h2>Resumo financeiro</h2>


                <List key={listTransactions.id} listTransactions={listTransactions} removeItem={removeItem} />

              </footer>
            </div></>
        }
        </>
    </div>
  )
}

export default App
