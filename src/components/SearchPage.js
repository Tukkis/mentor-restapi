import SearchBar from './SearchBar'
import CountryCard from './CountryCard';

function SearchPage(props) {

  return (
    <div className="w-full">
      <SearchBar {...props}></SearchBar>
      <div className={`grid xl:grid-cols-[repeat(4,250px)] lg:grid-cols-[repeat(3,250px)] sm:grid-cols-[repeat(2,250px)] gap-y-20 sm:justify-between justify-items-center px-20 ${props.modeState === 0 ? '' : 'bg-DarkModeBackground'}`}>
      {props.countries.map((country, i)=>
        <CountryCard key={i} modeState={props.modeState} setCountries={props.setCountries} countryData={country} setPageState={props.setPageState} setSelected={props.setSelected}></CountryCard>
      )}
      </div>
    </div>
  );
}

export default SearchPage;
