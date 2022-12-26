import React from 'react';
import { Animation } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import CollectionCard from './CollectionCard';

const Collection = () => {
  const { myCollections } = useStateContext();

  return (
    <Animation>
      <section className="text-sm w-full pb-24">
        <button className="text-primary-dark bg-primary-yellow rounded-full py-2.5 px-4 mr-2.5">My Collections</button>
        <button className="text-[#EFEEE0] border border-[#EFEEE0] rounded-full py-2.5 px-4 opacity-25">My Favorites</button>
        {myCollections.length === 0 && <div className="mt-3 text-lg text-[#EFEEE0] opacity-2">Oops, your collection seems to be empty</div>}
        <div className="flex sm:flex-row flex-col gap-6 mt-6"> 
          {myCollections.map((collection, index) => (
            <CollectionCard
              key={index}
              title={collection.data.title } 
              artist ={collection.data.artist} 
              imgSrc={collection.data.images} 
              id={collection.id}
            />
          ))}
        </div>
      </section>
    </Animation>
  )
}

export default Collection