import { useState } from 'react';
import Header from './components/Header'
import CountryPage from './components/CountryPage'
import SearchPage from './components/SearchPage'

function App() {

  const [ pageState, setPageState ] = useState(0)
  const [ modeState, setModeState ] = useState(0)
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState(0)
  const [ searchValue, setSearchValue ] = useState('')
  const [ selected, setSelected ] = useState(0)

  function modeChangeHandler(){
    modeState === 0 ? setModeState(1) : setModeState(0) 
  }

  return (
    <div className="w-full h-screen bg-LightModeBackground">
      <Header setModeState={modeChangeHandler}></Header>
      {
        pageState === 0 ? <SearchPage setPageState={setPageState} selected={selected} setSelected={setSelected} searchValue={searchValue} setSearchValue={setSearchValue} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}></SearchPage> : <CountryPage selected={selected} setPageState={setPageState}></CountryPage>
      }
    </div>
  );
}

export default App;
