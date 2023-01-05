import React from 'react';
import MusicList from './MusicList';

import { useStateContext } from '../../contexts/ContextProvider';

const NewRelease = () => {
  const { popular } = useStateContext();

  return (
    <div className="w-full mt-10">
      <h2 className="text-2xl font-bold mb-3.5">New releases</h2>
      <div className="flex flex-nowrap space-x-7 overflow-x-scroll w-full">
        {popular.map((track, index) => (
          (index < 10 ) && 
          <MusicList 
            key={track?.key}
            index={index}
            img={track?.images?.coverart}
            title={track?.title}
            artist={track?.subtitle}
            url={track?.url}
           />
        ))}
      </div>
    </div>
  )
};

export default NewRelease;