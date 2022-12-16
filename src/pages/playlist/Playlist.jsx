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
  const { setPlaylistBG, playTrack, RNB, hipHop, tomorrowTune } = useStateContext();
  const {playlistId} = useParams();
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  // state to be modified later
  const [trackState, setTrackState] = useState([]);
  

  useEffect(() => {
    // Get the playlist that matches the id
    // eslint-disable-next-line eqeqeq
    const current = chartItems.filter(item => item.id == playlistId );
    
    setCurrentPlaylist(current[0]);

  },[playlistId]);

  // useEffect to be probably removed later
  useEffect(() => {
    setPlaylistBG(currentPlaylist.images);
  });
  
  const handleClick = (e) => {
    playTrack(e, trackState);
  };
  
  useEffect(() => {
    // eslint-disable-next-line eqeqeq
      if (playlistId == 0) {
        setTrackState(RNB);
        // eslint-disable-next-line eqeqeq
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
          <div className="flex md:flex-row flex-col md:justify-start justify-center md:items-end items-start gap-6 w-full">
            <div className="w-72 h-full">
              <img className="object-cover rounded-[35px] w-full h-full" src={currentPlaylist.images} alt="" />
            </div>
            <article className="w-full">
              <h4 className="text-4xl font-bold mb-2 text-[#A4C7C6]">{currentPlaylist.title}</h4>
              <p className="text-sm text-[#EFEEE0] mb-2.5 max-w-[33rem]">{currentPlaylist.desc}</p>
              <p className="text-sm text-[#EFEEE0]">10 songs - 1hr+</p>
              <div className="flex gap-3 mt-6 whitespace-nowrap w-full">
                <button className="play-button">
                  <img className="mr-2" src={playIcon} alt="play" /> Play all
                </button>
                <button className="play-button">
                  <img className="mr-2" src={collectionIcon} alt="collection" /> Add to collection
                </button>
                <button className="play-button">
                  <img src={heartIcon} alt="heart" />
                </button>
              </div>
            </article>  
          </div>
          <div className="mt-5 md:mr-8 mr-0 mb-32"> 
            {trackState.map((item, index) => (
              <PlaylistCard
                key={index}
                index={index}
                img={item.images.coverart}
                title={item.title}
                category={'Single'}
                duration={233000}
                artist={item.subtitle}
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