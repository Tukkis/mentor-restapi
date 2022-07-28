import { useState } from 'react';
import Header from './components/Header'
import CountryPage from './components/CountryPage'
import SearchPage from './components/SearchPage'

function App() {

  const [ pageState, setPageState ] = useState(0)
  const [ modeState, setModeState ] = useState(0)

  function modeChangeHandler(){
    modeState === 0 ? setModeState(1) : setModeState(0) 
  }

  return (
    <div className="w-full">
      <Header setModeState={modeChangeHandler}></Header>
      {
        pageState === 0 ? <SearchPage></SearchPage> : <CountryPage></CountryPage>
      }
    </div>
  );
}

export default App;
