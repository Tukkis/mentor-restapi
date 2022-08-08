import { useState, useEffect } from 'react';
import axios from 'axios';

function CountryPage({ selected, setSelected, setPageState, countries }) {

  const [ borderCountries, setBorderCountries ] = useState([])

  //get border countries
  useEffect(() => {
    if(selected.borders){
      axios.get(`https://restcountries.com/v3.1/alpha?codes=${selected.borders.join(',')}`).then(res => {
        console.log(res.data)
        setBorderCountries(res.data);
    });
    }
  }, [selected.borders])

  function handlePageStateChange(){
    setPageState(0)
  }

  function getLanguagesFromSelected(data){
    let languages = Object.keys(data).map(key => data[key])
    return languages.join(', ')
  }

  function handleBorderCountrySelect(e){
    setSelected(borderCountries[e.target.id])
  }

  return (
    <div>
      <div className="bg-white rounded w-32 m-20 shadow-xl h-10 flex items-center">
        <button className="w-full text-center text-lg" onClick={handlePageStateChange}>← Back</button>
      </div>
      <div className="flex w-full justify-center">
        <img alt={selected.name.common} src={selected.flags.png} className="mr-16 w-[500px]"></img>
        <div>
          <h2 className="mb-6 mt-10 text-4xl"><strong> {selected.name.common} </strong></h2>
          <div className="grid grid-cols-2 gap-2">
            <h4><strong>Native Name:</strong> {selected.name.nativeName[Object.keys(selected.name.nativeName)[0]].common}</h4>
            <h4><strong>Top Level Domain:</strong> {selected.tld[0]}</h4>
            <h4><strong>Population:</strong> {selected.population.toLocaleString("en-US")}</h4>
            <h4><strong>Currencies:</strong> {selected.currencies[Object.keys(selected.currencies)[0]].name}</h4>
            <h4><strong>Region:</strong> {selected.region}</h4>
            <h4><strong>Languages:</strong> {getLanguagesFromSelected(selected.languages)}</h4>
            <h4><strong>Sub Region:</strong> {selected.subregion}</h4>
            <h4></h4>
            <h4><strong>Capital:</strong> {selected.capital}</h4>
          </div>
          <div className="flex mt-5">
            <h4 className='p-2'><strong>Border Countres:</strong></h4>
            {borderCountries.map((c,i)=><button className=' mx-2 p-2 rounded white shadow-md' key={i} id={i} onClick={handleBorderCountrySelect}>{c.name.common}</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
  