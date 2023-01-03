import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';

const db = new Dexie('MusicDatabase');
db.version(1).stores({
  collections: 'id, data',
  recent: 'id, data, timestamp'
});
db.open();

const LocalStore = () => {
  // COLLECTION 
  const myCollections = useLiveQuery(() => db.collections.toArray(), []); 
  const addToCollections = async (data) => {
    const { id } = data;
    await db.collections.add({ id, data }); 
  }
  const removeFromCollections = async (id) => {
    await db.collections.delete(id);
  }

  // RECENTLY PLAYED
  const recentlyPlayed = useLiveQuery(() => db.recent.toArray(), []);
  const addToRecent = async (data) => {
    const { id } = data;
    // Filter and store in an array based on the matching id
    let filteredRecent; 
     if (recentlyPlayed) {
      filteredRecent = recentlyPlayed.filter((data) => data.id === id);
    } else {
      return 0;
    }
    // Check if data id exists and update timestamp
    if (filteredRecent.length) {
      await (db.recent.update(id, { timestamp: Date.now() }));
    } else {
      await db.recent.add({ id, data, timestamp: Date.now() });
    };

    // Sort array items from lowest to highest using the timestamps
    let oldestItem = recentlyPlayed.sort((a, b) => a.timestamp - b.timestamp)[0];
    // Limit storage to only 5 items
    if (recentlyPlayed.length > 5) {
      await db.recent.delete(oldestItem.id); 
    };
  };

  return {
    myCollections,
    addToCollections,
    removeFromCollections,
    recentlyPlayed,
    addToRecent
  };
};

export default LocalStore;