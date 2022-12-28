import React from 'react'
import { Link } from 'react-router-dom';
import heart from '../../assets/icons/heart.svg';
import { chartItems } from './chartItems';

const TopCharts = () => {
  return (
    <div className="md:w-1/3 w-full">
      <h2 className="text-2xl font-bold mb-3.5">Top Charts</h2>
    <div className="flex md:flex-col flex-row md:gap-3 gap-4 overflow-x-scroll w-full">
        {chartItems.map((item) => (
          <Link 
            key={item.id}
            to={`/playlist/${item.id}`}
            className="shrink-0 md:w-full w-3/4"
          >
            <div className="flex md:flex-row flex-col gap-3 bg-dark-alt p-4 rounded-3xl relative w-full">
              <div className="md:w-16 w-[108px] md:h-16 h-24">
                <img className="object-cover rounded-xl w-full h-full" src={item.images} alt="music" />
              </div>
              <article className="w-full">
                <h4 className="leading-5 lg:text-[17px] text-sm font-semibold">{item.title}</h4>
                <span className="lg:w-full md:w-2/5 text-xs text-secondary-gray">{item.desc}</span>
                <p className="lg:text-sm md:text-[11px]">{item.timestamp}</p>
              </article>
              <div className="flex justify-center items-center w-10 h-10 rounded-full border border-white/[0.11] absolute md:top-1/2 top-8 lg:right-4 right-0 -translate-x-1/2 -translate-y-1/2">
                <img src={heart} alt="favorite" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TopCharts;