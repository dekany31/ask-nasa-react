import { useState } from "react";
import './App.css';
import TodaysPost from './components/TodaysPost';
import Gallery from "./components/Gallery.jsx";
import { useImageDay } from "./api/useData.js";

function App() {

  const dateTodayISO = (new Date()).toISOString().substring(0, 10);
  const [imageDay, setImageDay] = useState(dateTodayISO);//imageDay: A mai nap dátumának ISO formátumban tárolt állapota.
  const dayInfo = useImageDay(imageDay);//A useImageDay hook segítségével lekéri a mai napra vonatkozó információkat (dayInfo).

  const [showGallery, setShowGallery] = useState(false);//showGallery: A galéria megjelenítésének vagy elrejtésének állapota.
  const [modalImage, setModalImage] = useState(false);//modalImage: A modális képnézegető megjelenítésének vagy elrejtésének állapota.
  const [currentImage, setCurrentImage] = useState(null);//currentImage: A jelenlegi megjelenítendő kép állapota.


  return (
    <div className="App">
      {!showGallery && <header className="App-header">
        <div className="menuBar">
          <input type="date" defaultValue={dateTodayISO} onChange={(e) => setImageDay(e.target.value)} />
          <button onClick={() => setShowGallery(true)}>Gallery</button>
        </div>
        {dayInfo && <TodaysPost imageInfo={dayInfo} showOnlyImage={false} />}
      </header>}
      {showGallery && <> <button onClick={() => setShowGallery(false)}>Back</button>
        <Gallery setModalImage={setModalImage} setCurrentImage={setCurrentImage} currentImage={currentImage} modalImage={modalImage} onImageClick={() => setModalImage(false)} />
      </>}
      {/* A setModalImage, setCurrentImage és egyéb állapotok használatával vezérelve a galéria viselkedését. */}
    </div >
  );
}

export default App;
