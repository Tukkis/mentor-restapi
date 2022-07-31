import axios from "axios";

function SearchBar(...props) {

    function handleFilterChange(e){
      setFilter(e.target.value)
      axios.get(`https://restcountries.com/v3.1/name/${e.target.value}`).then(res => {
        console.log(res.data);
      });
    }

    return (
      <div className="rounded w-[700px] shadow-lg h-[55px] flex m-10 items-center">
        <div className="flex-initial w-70px pl-7 pr-5 bg-white">🔍︎</div>
        <input
            className="flex-initial w-full mr-7 h-2/3"
            type="text"
            placeholder="Search for a country..."
            onChange={handleFilterChange}
        />
      </div>
    );
  }
  
export default SearchBar;
  