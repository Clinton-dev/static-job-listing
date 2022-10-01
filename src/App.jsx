import { useEffect, useState } from 'react'
import Header from './components/Header';
import Joblisting from './components/Joblisting';
import Filter from './components/Filter';
import { Jobs } from './components/data';
import './App.css'

function App() {
  const [works, setWorks] = useState(Jobs);
  const [filteredWorks, setFilteredWorks] = useState(Jobs);
  const [language, setLanguage] = useState("all");
  const [filteredLanguages, setFilteredLanguages] = useState([])

  return (
    <div className="App">
      <Header />
      {!filteredLanguages.length == 0 && <Filter setFilteredLanguages={setFilteredLanguages} />}
      <Joblisting works={works} filteredLanguages={filteredLanguages} setFilteredLanguages={setFilteredLanguages} filteredWorks={filteredWorks} setFilteredWorks={setFilteredWorks} setLanguage={setLanguage} language={language} />
    </div>
  )
}

export default App
