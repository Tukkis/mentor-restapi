import SearchBar from './SearchBar'

function SearchPage(props) {
    return (
      <div className="bg-white">
        <SearchBar {...props}></SearchBar>
      </div>
    );
  }
  
  export default SearchPage;
  