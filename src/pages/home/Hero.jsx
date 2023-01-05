import React from 'react';
import heroImg from '../../assets/images/hero-img.png';
import heartWhite from '../../assets/icons/heart-white.svg';
import vector from '../../assets/images/vector.svg';

const Hero = () => {
  const Likes =  ({ src, ml }) => {
    return(
      <div className={`md:w-7 md:h-7 w-8 h-8 drop-shadow:3xl inline-block overflow-hidden ${ml}`}>
        <img className="w-full h-full rounded-full object-cover" src={src} alt="img" />
      </div>
    );
  };

  return (
    <div className="relative bg-[#609EAF] flex rounded-[40px] md:w-2/3 w-full  md:h-[373px] h-[60vh] text-white overflow-hidden shadow-[0_15px_22px_-20px_rgba(122,144,150,1)]"> {/**max-h-[503px] */}
      <img className="absolute md:right-0 -right-36 md:top-0 -top-20 md:rotate-0 rotate-90" src={vector} alt="vector" />
      <div className="flex flex-col justify-between py-[38px] sm:px-[45px] px-3 z-10 w-full">
        <span className="md:mb-0 mb-auto">Curated Playlist</span>
        <article className="mb-11 leading-[120%]">
          <h2 className="text-4xl font-bold">R & B Hits</h2>
          <p className="w-full max-w-[17.25rem] text-sm">All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
        </article>
        <div className="flex space-x-4 sm:justify-start justify-between items-center whitespace-nowrap w-full">
          <div>
            <Likes src="https://images.pexels.com/photos/6274836/pexels-photo-6274836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Likes src="https://images.pexels.com/photos/4565030/pexels-photo-4565030.jpeg?auto=compress&cs=tinysrgb&w=600" ml="-ml-2" />
            <Likes src="https://images.pexels.com/photos/5188600/pexels-photo-5188600.jpeg?auto=compress&cs=tinysrgb&w=600" ml="-ml-2" />
            <Likes src="https://images.pexels.com/photos/13146016/pexels-photo-13146016.png?auto=compress&cs=tinysrgb&w=600" ml="-ml-2" />
            <Likes src="https://images.pexels.com/photos/12943106/pexels-photo-12943106.jpeg?auto=compress&cs=tinysrgb&w=600" ml="-ml-2" />
          </div>
          <div className="flex items-center">
            <img src={heartWhite} alt="heart" className="md:w-4 md:h-4 w-5 h-5 mr-2 ml-3" />
            <span className="md:text-lg text-sm">33k likes</span>
          </div>
        </div>
      </div>
      <img className="md:block hidden ml-auto z-10" src={heroImg} alt="hero-img" />
    </div>
  )
}

export default Hero;