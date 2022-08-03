import SearchBar from './SearchBar'
import CountryCard from './CountryCard';

function SearchPage(props) {

  return (
    <div className="w-full">
      <SearchBar {...props}></SearchBar>
      <div className="grid grid-cols-4">
      {props.countries.map((country, i)=>
        <CountryCard key={i} countryData={country} setPageState={props.setPageState} setSelected={props.setSelected}></CountryCard>
      )}
      </div>
    </div>
  );
}

export default SearchPage;
