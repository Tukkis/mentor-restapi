import axios from "axios";

function SearchBar({ modeState, setCountries, filter, setFilter, searchValue, setSearchValue }) {

  const filterLiteral= {
    0: '',
    1: 'Africa',
    2: 'Americas',
    3: 'Asia',
    4: 'Europe',
    5: 'Oceania'
  }

  function handleSearchChange(e){
    const fieldValue = e.target.value
    setSearchValue(fieldValue)
    if(fieldValue.length > 0){
      axios.get(`https://restcountries.com/v3.1/name/${fieldValue}`).then(res => {
        let filteredRes = res.data.filter(country=>country.region.includes(filterLiteral[filter]))
        setCountries(filteredRes);
      }).catch(err=> setCountries([]));
    } else {
      axios.get(`https://restcountries.com/v3.1/all`).then(res => {
        let filteredRes = res.data.filter(country=>country.region.includes(filterLiteral[filter]))
        setCountries(filteredRes);
      });
    }
  }

  function handleFilterChange(e){
    const fieldValue = Number(e.target.value)
    console.log(fieldValue,searchValue)
    setFilter(fieldValue)
    if(searchValue.length > 0){
      axios.get(`https://restcountries.com/v3.1/name/${searchValue}`).then(res => {
        let filteredRes = res.data.filter(country=>country.region.includes(filterLiteral[fieldValue]))
        setCountries(filteredRes);
      });
    } else {
      axios.get(`https://restcountries.com/v3.1/all`).then(res => {
        let filteredRes = res.data.filter(country=>country.region.includes(filterLiteral[fieldValue]))
        setCountries(filteredRes);
      });
    }
  }

  return (
    <div className={`sm:flex mr-[112px] justify-between ${modeState === 0 ? '' : 'bg-DarkModeBackground'}`}>
      <div className={`rounded sm:w-[700px] shadow-lg h-[55px] flex m-10 sm:mx-20 mx-10 items-center ${modeState === 0 ? '' : 'bg-DarkModeElements'}`}>
        <div className="flex-initial w-70px pl-7 pr-5 ">🔍︎</div>
        <input
            className={`flex-initial w-full mr-7 h-2/3 ${modeState === 0 ? 'text-LightModeInput' : 'bg-DarkModeElements text-white'}`}
            type="text"
            placeholder="Search for a country..."
            onChange={handleSearchChange}
        />
      </div>
      <div className="rounded sm:w-[200] w-20 shadow-lg h-[55px] m-10 flex items-center justify-self-end">
        <select className={`h-full pr-5 ${modeState === 0 ? '' : 'bg-DarkModeElements text-white'}`} value={filter} onChange={handleFilterChange}>
          <option value="0">Filter by Region</option>
          <option value="1">Africa</option>
          <option value="2">America</option>
          <option value="3">Asia</option>
          <option value="4">Europe</option>
          <option value="5">Oceania</option>
        </select>
      </div>
    </div>
  );
}
  
export default SearchBar;
  