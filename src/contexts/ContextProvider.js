import React, { createContext, useContext, useEffect, useState } from "react";

import { rnb } from "../dummy/rnb";
import { hiphop } from "../dummy/hiphop";
import { tomorrow } from "../dummy/tomorrowTune";
import { popularMusic } from "../dummy/popular";

import LocalStore from "./LocalStore";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [popular, setPopular] = useState(popularMusic);
  const [RNB, setRNB] = useState(rnb);
  const [hipHop, setHipHop] = useState(hiphop);
  const [tomorrowTune, setTomorrowTune] = useState(tomorrow);
  const [playlistBG, setPlaylistBG] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [audioPlayer, setAudioPlayer] = useState(document.createElement('audio'));
  const [tracksQueue, setTracksQueue] = useState([]);
  const [trackIndex, setTrackIndex] = useState({});
  const [currentTrackData, setCurrentTrackData] = useState({});
  const [playerSrc, setPlayerSrc] = useState('');
  const [playerDetail, setPlayerDetail] = useState({});
  const [musicDuration ,setMusicDuration] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPlayer, setShowPlayer] = useState(false);
  
  const { 
    myCollections, 
    addToCollections, 
    removeFromCollections, 
    recentlyPlayed, 
    addToRecent
  } = LocalStore();

  // const fetchData = async (params) => {
  //   const baseURL = 'https://shazam-core.p.rapidapi.com/v1';
  //   const options = {
  //     params: { maxResults: 30 },
  //     headers: {
  //       'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
  //       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //   const { data } = await axios.get(`${baseURL}/${params}`, options);
  //   // console.log(data);

  //   return data;  
  //   } catch (error) {
  //     console.log(error);
  //   }
     
  // }

  // Run only on page load
  // useEffect( () => {
  //   const runData = async () => {
  //     setPopular(await fetchData('charts/country?country_code=NG'));
  //     setRNB(await fetchData('charts/genre-world?genre_code=SOUL_RNB'));
  //     setHipHop(await fetchData('charts/genre-world?genre_code=HIP_HOP_RAP'));
  //     setTomorrowTune(await fetchData('charts/genre-world?genre_code=COUNTRY'));
  //   }
  //   runData();
  // }, []);

  // Set audioPlayer globally
  useEffect(() => {
    setAudioPlayer(document.querySelector('#audio-player'));
    setMusicDuration(audioPlayer.duration);
  }, [musicDuration]);

  // Play track with the corresponding index anytime 'trackIndex' changes
  useEffect(() => {
    setCurrentTrack(trackIndex);
  }, [trackIndex]);



  // Toggle Play button on/off
  const togglePlay = () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }    
    setCurrentTime((audioPlayer.currentTime / audioPlayer.duration) * 100)
  };

  // Continue to play music
  const continuePlay = () => {
    audioPlayer.play();
  }

  // Get and set all the details of the current track
  const setCurrentTrack = (index) => {
    const url = tracksQueue[index]?.hub?.actions[1]?.uri;
    const cover = tracksQueue[index]?.images?.coverart;
    const title = tracksQueue[index]?.title;
    const artist = tracksQueue[index]?.subtitle;
    const id = tracksQueue[index]?.key;

    setPlayerSrc(url);
    setPlayerDetail({ cover, title, duration: '', artist });
    setCurrentTrackData({ id, index, image : cover, title, artist, url });

    if (currentTrackData) {
      addToRecent(currentTrackData);
    }

    audioPlayer.onloadedmetadata = () => {
      setMusicDuration(audioPlayer.duration);
      setCurrentTime((audioPlayer.currentTime / audioPlayer.duration) * 100)
      continuePlay();    
    }
  };

  // Play the previous track
  const prevTrack = () => {
    setTrackIndex(prevState => {
      if (prevState !== 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });
    setMusicDuration(audioPlayer.duration);
  };

  // Play the next track
  const nextTrack = () => {
    if (!isShuffle) {
      // If shuffle is false, play next song by incrementing the track index
      setTrackIndex(prevState => {
        if (prevState !== (tracksQueue.length - 1)) {
          return prevState + 1;
        } else {
          return 0;
        }
      });
    } else {
      // Generate a random index and assign to trackIndex
      const randIndex = Math.floor(Math.random() * tracksQueue.length);
      setTrackIndex(randIndex);
    }
    setMusicDuration(audioPlayer.duration);
  };

  // Play next song by incrementing the trackIndex each time a song ends
  audioPlayer.onended = () => {
    nextTrack();
  };

  // Moving play progress
  audioPlayer.ontimeupdate = () => {
    setCurrentTime((audioPlayer.currentTime / musicDuration * 100).toFixed(2));
  };

  //Play playlist item when clicked
  const playTrack = (e, params) => {
    setTracksQueue(params);
    let index = e.currentTarget.getAttribute('data-id');
    setTrackIndex(parseInt(index));
    setCurrentTrack(index);
    setShowPlayer(true);
    setMusicDuration(audioPlayer.duration);
  };

  // Convert milliseconds to minute and seconds
  const millisecondsToMinute = (milliseconds) => {
    const second = Math.floor(milliseconds / 1000);
    const minute = Math.floor(second / 60)
    const seconds = Math.floor(second % 60)
    return `${minute.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
  };

  // Filter music tracks based on search query
  const filteredSearch = popular.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <StateContext.Provider
      value={{
        // fetchData,
        playerSrc,
        setPlayerSrc,
        playerDetail,
        setPlayerDetail,
        currentTime,
        setCurrentTime,
        isShuffle,
        setIsShuffle,
        togglePlay,
        audioPlayer,
        setAudioPlayer,
        prevTrack,
        nextTrack,
        playTrack,
        millisecondsToMinute,
        currentTrackData,
        setCurrentTrackData,
        playlistBG,
        setPlaylistBG,
        popular,
        setPopular,
        RNB,
        setRNB,
        hipHop,
        setHipHop,
        tomorrowTune,
        setTomorrowTune,
        trackIndex,
        tracksQueue,
        searchQuery,
        setSearchQuery,
        filteredSearch,
        setTracksQueue,
        setTrackIndex,
        setCurrentTrack,
        myCollections, 
        addToCollections, 
        removeFromCollections, 
        recentlyPlayed, 
        addToRecent,
        showPlayer,
        setShowPlayer
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
