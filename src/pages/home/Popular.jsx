import React from 'react';
import MusicList from './MusicList';
import { useStateContext } from '../../contexts/ContextProvider';

const Popular = () => {
  const { popular, recentlyPlayed, showPlayer } = useStateContext();

  return (
    <div className={`mt-10 ${showPlayer ? 'mb-32' : recentlyPlayed ? 'mb-10' : (recentlyPlayed && showPlayer) ? '-mb-32' : 'mb-10'}`}>
      <h2 className="text-2xl font-bold mb-3.5">Popular in your area</h2>
      <div className="flex flex-nowrap space-x-7 overflow-x-scroll w-full">
        {popular.map((track, index) => (
          (index >= 10 && index < 20 ) &&
          <MusicList
            key={track?.key}
            index={index}
            img={track?.images?.coverart}
            title={track?.title}
            artiste={track?.subtitle}
            url={track?.uri}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular;