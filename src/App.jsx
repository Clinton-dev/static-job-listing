import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import Joblisting from './components/Joblisting';
import { Jobs } from './components/data';
import './App.css'

function App() {
  const [works, setWorks] = useState(Jobs);

  return (
    <div className="App">
      <Header />
      <Joblisting works={works} />
    </div>
  )
}

export default App
