 
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import { Suspense } from 'react'
import ResultsChart from './components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

const pricingPromise = fetch('pricingData.json')
    .then(res => res.json());

    const marksPromise = axios.get('marksData.json');

function App() {
  

  return (
    <>

 
      
       <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
           <h1 className='text-3xl font-bold text-center mt-4 '>Md.Shajalal</h1>
       </header>
       <main>
           <Suspense fallback = {<span className="loading loading-spinner loading-lg"></span>}>
              <PricingOptions pricingPromise= {pricingPromise}></PricingOptions>
           </Suspense>

           <Suspense  fallback = {<span className="loading loading-spinner loading-lg"></span>}>
                <MarksChart marksPromise={marksPromise}></MarksChart>
           </Suspense>
           <ResultsChart></ResultsChart>
       </main>

      
       
      
    </>
  )
}

export default App
