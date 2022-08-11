function Header({ setModeState, modeState }) {

  

    return (
      <div className={`flex p-10 py-7 shadow-lg ${modeState === 0 ? 'bg-white' : 'bg-DarkModeElements text-white'}`}>
        <div className={`grow font-NunitoBlack text-2xl`}>Where in the world?</div>
        <div className={`font-NunitoLight cursor-pointer`} onClick={setModeState}>☾ Dark mode</div>
      </div>
    );
  }
  
export default Header;
  