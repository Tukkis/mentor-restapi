import axios from "axios";

function CountryCard({ modeState, countryData, setSelected, setPageState, setCountries }) {

  function handleSelection(){
    axios.get(`https://restcountries.com/v3.1/all`).then(res => {
        setCountries(res.data);
    });
    setSelected(countryData)
    setPageState(1)
  }

  return (
    <div className={` w-[250px] rounded shadow-md ${modeState === 0 ? 'bg-white text-LightModeText' : 'bg-DarkModeElements text-white'}`}>
      <img className="cursor-pointer w-full h-40 rounded-t" alt={countryData.name.common} src={countryData.flags.png} onClick={handleSelection}></img>
      <div className="m-4">
        <h2 className="mb-4 text-lg"><strong> {countryData.name.common} </strong></h2>
        <h4><strong>Population:</strong> {countryData.population.toLocaleString("en-US")}</h4>
        <h4><strong>Region:</strong> {countryData.region}</h4>
        <h4><strong>Capital:</strong> {countryData.capital}</h4>
      </div>
    </div>
  );
}

export default CountryCard;
  