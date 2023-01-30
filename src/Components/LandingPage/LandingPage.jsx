import '/src/reset.css'
import './landingpage.css'
import { useState } from "react";

function LandingPage() {

    const [pages, setPages] = useState('')
    console.log(pages)
    return (
        <div className='body'>
            
        <header className='header'>
            <h1><span>Nu  </span>Kenzie</h1>
            <h2>Centralize o controle das suas finanças</h2>
            <h3>de forma rápida e segura</h3>
            <button type='button' onClick={()=>setPages('Dashboard')}>Inicio</button>
          </header><div className='app__container'></div>
          <main>
            <div className='containerBox'>
                <div className='boxInside'></div>
                <div className='boxInside'></div>
                <div className='boxInside'></div>
                <div className='boxInside'></div>
                <div className='boxInside'></div>
                <div className='boxOutside1'>
                    <div className='image1'></div>
                </div>
                <div className='boxOutside2'>
                    <div className='image2'></div>
                </div>
            </div>
          </main>

        </div>

        
    )
}

export default LandingPage