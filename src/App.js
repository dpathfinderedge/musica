import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Player, SideNav } from "./components";
import Header from "./components/Header";
import { useStateContext } from "./contexts/ContextProvider";
import { Collection, Home, Playlist } from "./pages";

function App() {
  const { playlistBG } = useStateContext();

  const styles={
    backgroundImage: `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(${playlistBG})`
  };

  return (
    <BrowserRouter>
      <div className="h-screen overflow-y-auto overflow-x-hidden relative bg-main-bg px-6 bg-cover bg-no-repeat bg-center" style={styles}>
          <Player />
          <Header />
          <main className="flex w-full h-full text-white mt-20">
            <SideNav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/collection" element={<Collection />} />
              <Route exact path="/playlist/:playlistId" element={<Playlist />} />
              <Route exact path="/radio" element={<>Coming Soon...</>} />
              <Route exact path="/videos" element={<>Coming Soon...</>} />
              <Route exact path="/profile" element={<>Coming Soon...</>} />
              <Route exact path="/logout" element={<>Coming Soon...</>} />
              <Route path="*" element={<>Oops, that page cannot not be found 😞</>} />
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
