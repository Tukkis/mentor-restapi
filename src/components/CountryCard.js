function CountryCard({countryData, setSelected, setPageState}) {

  function handleSelection(){
    setSelected(countryData)
    setPageState(1)
  }

  return (
    <div className="bg-white w-full">
      <img className="cursor-pointer w-full h-52 rounded shadow-md" alt={countryData.name.common} src={countryData.flags.png} onClick={handleSelection}></img>
      <div>
        <h2><strong>{countryData.name.common} </strong></h2>
        <h4><strong>Population:</strong>{countryData.population}</h4>
        <h4><strong>Region:</strong>{countryData.region}</h4>
        <h4><strong>Capital:</strong>{countryData.capital}</h4>
      </div>
    </div>
  );
}

export default CountryCard;
  