import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import Joblisting from './components/Joblisting';
import { Jobs } from './components/data';
import './App.css'

function App() {
  const [works, setWorks] = useState(Jobs);
  const [filteredWorks, setFilteredWorks] = useState(Jobs);
  const [language, setLanguage] = useState("all");

  return (
    <div className="App">
      <Header />
      <Joblisting works={filteredWorks} setFilteredWorks={setFilteredWorks} setLanguage={setLanguage} language={language} />
    </div>
  )
}

export default App
