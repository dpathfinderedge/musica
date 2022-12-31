import React, { useEffect } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { Hero, TopCharts, NewRelease, Popular, Recent } from './';

const Home = () => {
  const { setPlaylistBG, recentlyPlayed } = useStateContext();

  // Remove playlist bg when homepage renders
  useEffect(() => {
    setPlaylistBG(false);
  });

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden ">
      <section className="flex md:flex-row flex-col gap-6 w-full">
        <Hero />
        <TopCharts />
      </section>
      <section>
        <NewRelease />
      </section>
      <section>
        <Popular />
      </section>
      <section>
        {recentlyPlayed?.length > 0  && <Recent />}
      </section>
    </div>
  )
}

export default Home;