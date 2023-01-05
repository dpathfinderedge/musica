import React from 'react';
import MusicList from './MusicList';
import { useStateContext } from '../../contexts/ContextProvider';

const Recent = () => {
  const { recentlyPlayed, showPlayer } = useStateContext();
  const sortedTracks = recentlyPlayed.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className={`-mt-24 ${showPlayer ? 'mb-32' : 'mt-7 mb-10'}`}>
      <h2 className="text-2xl font-bold mb-3.5">Recently played</h2>
      <div className="flex flex-nowrap space-x-7 overflow-x-scroll w-full">
        {sortedTracks.length && sortedTracks.map((track, index) => ( 
          (index < 5) &&
          <MusicList 
          key={track?.data?.id}
          index={track?.data?.index}
          img={track?.data?.image}
          title={track?.data?.title}
          artist={track?.data?.artist}
          url={track?.data?.url}
         />
        ))}
      </div>
    </div>
  )
}

export default Recent;