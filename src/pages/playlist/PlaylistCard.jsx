import React from 'react';
import heart from '../../assets/icons/outline-heart.svg';
import more from '../../assets/icons/more.svg';
import { useStateContext } from '../../contexts/ContextProvider';

const PlaylistCard = ({ index, img, title, category, duration, artist, handleClick }) => {
  const { millisecondsToMinute } = useStateContext();

  return (
    <button onClick={handleClick} data-id={index} className="flex items-center backdrop-blur-sm cursor-pointer outline-0 border-0 bg-[rgb(51,55,59,0.37)] rounded-[15px] py-2 pl-2.5 md:pr-8 pr-2.5 text-xs mb-3 w-full">
      <div className="flex justify-start items-center sm:w-3/5 w-full">
        <div className="flex items-center gap-3 w-1/3">
          <img className="w-10 h-10 rounded-lg object-cover" src={img} alt="banner" />
          <img className="md:block hidden" src={heart} alt="heart" />
        </div>
        <div className="flex md:flex-row flex-col md:justify-between justify-start gap-3 w-2/3">
          <p className="truncate">{title} - {artist}</p>
          <p className="">{category}</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-end items-end md:gap-12 gap-2 w-2/5">
        <p>{millisecondsToMinute(duration)}</p>
        <img src={more} alt="" />
      </div>
    </button>
  );
};

export default PlaylistCard;