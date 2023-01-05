import React, { useState, useRef } from 'react';
import logo from '../assets/icons/logo.svg';
import search from '../assets/icons/search.svg';
import { useStateContext } from '../contexts/ContextProvider';
import { MobileNav } from './';

const Header = () => {
  const [mobileSearchIsClicked, setMobileSearchIsClicked] = useState(false);
  const searchRef = useRef(null);
  const {searchQuery, setSearchQuery, setTracksQueue, setShowPlayer, filteredSearch, popular, setTrackIndex, setCurrentTrack} = useStateContext();

  const playSearch = (e) => {
   let key = e.currentTarget.getAttribute('data-id');

   // Get the index of the track from an array(queue) of tracks
   let currentIndex;
   for (let i = 0; i < popular.length; i++) {
     if (popular[i].key === key ) {
      currentIndex = i;
     }
   };

   setTracksQueue(popular);
   setTrackIndex(parseInt(currentIndex));
   setCurrentTrack(currentIndex);
   setSearchQuery('');
   setShowPlayer(true);
   setMobileSearchIsClicked(false);
  };

  window.onclick = (e) =>{
    // Close the input field if it is not empty and also if the search result is not clicked when a user clicks out
    if (e.target !== document.querySelector('.search-result') && searchQuery !== ''){
      setSearchQuery('');
      setMobileSearchIsClicked(false);
    }
  };

  const showMobileSearch = () => {
    setMobileSearchIsClicked(true);
    
    // Delay by 0.125s due to late state update
    const timer = setTimeout(() => searchRef.current.focus(), 125);
    return () => clearTimeout(timer);
  }

  const toggleSideMenu = () => {
    document.querySelector('.slide-down').classList.toggle('-left-full');
    // document.querySelector('.slide-down').classList.toggle('top-0');
  };

  const handleCloseSideMenu = () => {
    toggleSideMenu();
  };

  return (
    <header className="fixed top-0 left-0 z-50 py-2 md:pl-14 px-6 w-full text-primary-gray bg-main-bg">
      <div className={`${mobileSearchIsClicked ? 'md:inline-flex items-center h-11 w-full' : 'flex md:justify-start justify-between items-center space-x-10 w-full'}`}>
        <div className={mobileSearchIsClicked ? 'hidden' : 'flex items-center space-x-4'}>
          <button className="md:hidden block outline-0 border-0" onClick={toggleSideMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2330_441)">
                <path d="M4 8H20" stroke="#EFEEE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16H20" stroke="#EFEEE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_2330_441">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          <img src={logo} alt="music logo" />
        </div>
        <div className={mobileSearchIsClicked ? 'hidden' : 'flex md:justify-start justify-end items-center w-full h-11'}>
          <div className="relative md:block hidden w-full h-full">
            <input 
              type="text" 
              placeholder="Search artists"
              className="w-3/5 h-full py-0 pl-10 border-0 block focus:outline-0 bg-transparent placeholder:text-primary-gray"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <span className="absolute left-3 top-[50%] -translate-x-1/2 -translate-y-1/2 w-7 h-7">
              <img src={search} alt="search icon" className="w-full h-full object-cover" />
            </span>  
          </div>
          <button onClick={showMobileSearch} className= "md:hidden block w-7 h-7">
            <img src={search} alt="search icon" className="w-full h-full object-cover" />
          </button>
        </div>
      
        {mobileSearchIsClicked && (
          <div className="block mobile-search transition-all w-full h-full relative">
            <input 
              type="text" 
              ref={searchRef}
              placeholder="Search artists"
              className="w-[90%] h-full border-0 block focus:outline-0 bg-transparent placeholder:text-primary-gray"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <button onClick={() => setMobileSearchIsClicked(false)} className="absolute top-0 right-0 text-white font-semibold">
              X
            </button>
          </div>
        )}
      </div>
      {searchQuery.length > 0 && (
        <div
          className="search-result text-secondary-gray absolute left-0 bg-dark-alt w-full md:px-32 px-6 py-6"
        >
          {filteredSearch.map((item) => (
            <div 
              className="hover:text-white py-2 cursor-pointer"
              key={item.key}
              data-id={item.key}
              onClick={playSearch}
            >
              {item.title} - {item.subtitle} 
            </div>
          ))}
        </div>
      )}

      <MobileNav handleCloseSideMenu={handleCloseSideMenu} />
    </header>
  )
};

export default Header;