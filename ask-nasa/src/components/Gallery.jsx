import { useImageGallery } from "../api/useData.js";
import TodaysPost from "./TodaysPost.jsx";

const Gallery = ({ setModalImage, setCurrentImage, currentImage, modalImage, onImageClick }) => {

  const galleryInfo = useImageGallery();

  return (
    <div className="gallery">
      {modalImage && <div className="modalImage" onClick={onImageClick}>
        <TodaysPost imageInfo={currentImage} showOnlyImage={false} />
      </div>}
      {[...galleryInfo].map((x, index) =>
        <TodaysPost key={"Image-" + index}
          imageInfo={x}
          showOnlyImage={true}
          setModalImage={setModalImage}
          setCurrentImage={setCurrentImage} />)}
    </div>
  );
}

export default Gallery