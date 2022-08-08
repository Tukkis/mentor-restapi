function CountryCard({countryData, setSelected, setPageState}) {

  function handleSelection(){
    setSelected(countryData)
    setPageState(1)
  }

  return (
    <div className="bg-white w-[250px] rounded shadow-md">
      <img className="cursor-pointer w-full h-40 rounded-t" alt={countryData.name.common} src={countryData.flags.png} onClick={handleSelection}></img>
      <div className="m-4 text-LightModeText">
        <h2 className="mb-4"><strong> {countryData.name.common} </strong></h2>
        <h4><strong>Population:</strong> {countryData.population.toLocaleString("en-US")}</h4>
        <h4><strong>Region:</strong> {countryData.region}</h4>
        <h4><strong>Capital:</strong> {countryData.capital}</h4>
      </div>
    </div>
  );
}

export default CountryCard;
  