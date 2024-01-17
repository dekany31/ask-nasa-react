import React from 'react'

function TodaysPost({ imageInfo, showOnlyImage, setModalImage, setCurrentImage }) {

  const onImageClick = () => {
    if (showOnlyImage) {
      setCurrentImage(imageInfo);
      setModalImage(true);
    }
  };
  //console.log(imageInfo);
  return (
    <>
      {imageInfo.media_type === "image" ?
        <img src={imageInfo.url} alt={imageInfo.title} onClick={onImageClick} /> :
        imageInfo.media_type === "video" ?
          <iframe title="video" src={imageInfo.url} onClick={onImageClick} /> : <div />}
      {!showOnlyImage && (
        <>
          <h2 className="title">{imageInfo.title}</h2>
          <div className="explanationContainer">{imageInfo.explanation}</div>
        </>)
      }
    </>
  )
}

export default TodaysPost