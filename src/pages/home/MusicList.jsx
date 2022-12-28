import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const MusicList = ({ index, img, title, artist, url }) => {
  const { playTrack, popular } = useStateContext();

  const handleClick = (e) => {
    playTrack(e, popular);
  };
  
  return (
    <button
      className="text-xs shrink-0 w-[153px] outline-0 border-0"
      onClick={handleClick}
      data-id={index}
    >
      <div className="w-full h-[153px]">
        <img src={img} alt="" className="object-cover rounded-3xl w-full h-full" />
      </div>
      <div className="text-start mt-1 w-full">
        <p className="mb-1 text-xs">{title}</p>
        <p>{artist}</p>
      </div>
    </button>
  )
}

export default MusicList;