import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useStateContext } from '../../contexts/ContextProvider';
import playIcon from '../../assets/icons/play-new.svg';
import collectionIcon from '../../assets/icons/music-square-add.svg';
import heartIcon from '../../assets/icons/heart-red.svg';
import Animation from '../../components/Animation';
import { chartItems } from '../home/chartItems';
import PlaylistCard from './PlaylistCard';

const Playlist = () => {
  const { setPlaylistBG, playTrack, RNB, hipHop, tomorrowTune, myCollections, addToCollections, removeFromCollections, showPlayer } = useStateContext();
  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [playlistAddedToCollection, setPlaylistAddedToCollection] = useState(false);
  const {playlistId} = useParams();
  const [trackState, setTrackState] = useState([]);

  useEffect(() => {
    // Get the playlist that matches the id
    const current = chartItems.filter(item => item.id == playlistId );
    
    setCurrentPlaylist(current[0]);

  },[playlistId]);

  useEffect(() => {
    setPlaylistBG(currentPlaylist.images);
  });

  useEffect(() => {
    if (currentPlaylist && myCollections) {
      const check = myCollections.filter(data => data.id === currentPlaylist.id );

      check.length === 1 && setPlaylistAddedToCollection(true);
    }
  }, [currentPlaylist]);
  
  const handleClick = (e) => {
    playTrack(e, trackState);
  };

  const handleOptions = (e, text) => {
    e.preventDefault();
    
    if (text === 'Play all') {
      playTrack(e, trackState);
    }
     
    if (text === 'Add to collection') {
      addToCollections(currentPlaylist);
      setPlaylistAddedToCollection(true);
    }

    if (text === 'Remove from collection') {
      removeFromCollections(currentPlaylist.id);
      setPlaylistAddedToCollection(false);
    }
  };

  
  useEffect(() => {
      if (playlistId == 0) {
        setTrackState(RNB);
      } else if (playlistId == 1) {
        setTrackState(hipHop);
      } else {
        setTrackState(tomorrowTune);
      };
  }, [playlistId, RNB, hipHop, tomorrowTune]);

  return (
    <>
      <Animation>
        <section className="w-full h-screen overflow-auto">
          <div className="flex md:flex-row flex-col md:justify-start justify-center md:items-end items-start md:space-x-6 space-x-0 md:space-y-0 space-y-6 w-full">
            <div className="sm:w-72 w-full h-full">
              <img className="object-cover rounded-[35px] w-full h-full" src={currentPlaylist?.images} alt="" />
            </div>
            <article className="w-full">
              <h4 className="text-4xl font-bold mb-2 text-[#A4C7C6]">{currentPlaylist?.title}</h4>
              <p className="text-sm text-[#EFEEE0] mb-2.5 max-w-[33rem]">{currentPlaylist?.desc}</p>
              <p className="text-sm text-[#EFEEE0]">10 songs - 1hr+</p>
              <div className="flex space-x-3 mt-6 w-full">
                {[
                  [playIcon, 'Play all'],
                  [collectionIcon, playlistAddedToCollection ? 'Remove from collection' : 'Add to collection'],
                  [heartIcon]
                ].map(([src, text]) => (
                  <button key={src} data-id={0} onClick={(e) => handleOptions(e,text)} className="play-button outline-0 border-0">
                    <img className={text ? 'mr-1' : '' } src={src} alt="icon" /> {text}
                  </button>
                ))}
              </div>
            </article>  
          </div>
          <div className={`mt-5 md:mr-8 mr-0 ${showPlayer ? 'sm:mb-32 mb-28' : 'mb-5'}`}> 
            {trackState.map((item, index) => (
              <PlaylistCard
                key={index}
                index={index}
                img={item?.images?.coverart}
                title={item?.title}
                category={'Single'}
                duration={233000}
                artist={item?.subtitle}
                handleClick={handleClick}
              />     
            ))}
          </div>
        </section>
      </Animation>
    </>
  )
}

export default Playlist;