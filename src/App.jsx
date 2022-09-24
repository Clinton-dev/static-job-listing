import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import Joblisting from './components/Joblisting';
import { Jobs } from './components/data';
import './App.css'

function App() {
  const [work, setWork] = useState(Jobs);

  return (
    <div className="App">
      <Header />
      <Joblisting work={work} />
    </div>
  )
}

export default App
