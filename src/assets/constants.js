import home from './icons/home.svg';
import homeActive from './icons/home-active.svg';
import collection from './icons/collection.svg';
import collectionActive from './icons/collection-active.svg';
import radio from './icons/radio.svg';
import radioActive from './icons/radio-active.svg';
import video from './icons/videos.svg';
import videoActive from './icons/video-active.svg';
import profile from './icons/profile.svg';
import profileActive from './icons/profile-active.svg';
import logout from './icons/logout.svg';
import logoutActive from './icons/logout-active.svg';

export const mainCategories = [
  { name: 'home', icon: home, activeIcon: homeActive },
  { name: 'collection', icon: collection, activeIcon: collectionActive },
  { name: 'radio', icon: radio, activeIcon: radioActive },
  { name: 'videos', icon: video, activeIcon: videoActive },
]; 

export const profileCategories = [
  { name: 'profile', icon: profile, activeIcon: profileActive },
  { name: 'logout', icon: logout, activeIcon: logoutActive }
];

export const mobileNav = [
  { name: 'home', icon: home },
  { name: 'collection', icon: collection },
  { name: 'radio', icon: radio },
  { name: 'videos', icon: video },
  { name: 'profile', icon: profile },
  { name: 'logout', icon: logout }
]