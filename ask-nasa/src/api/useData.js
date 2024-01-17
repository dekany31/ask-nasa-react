import { useEffect } from "react";
import useFetch from "./useFetch";

const mainUrl = {
  imageOfTheDay: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=",
  imageGallery: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10"
};


export const useImageDay = (imageDay) => {
  // A useFetch hook (ez felelős az adatok lekérdezéséért és a lekérdezett adatok tárolásáért) használata imageOfTheDay API segitsegevel
  const [imageDayInfo, setUrl] = useFetch(mainUrl.imageOfTheDay + imageDay);

  // useEffect használata az URL frissítésére, amikor az imageDay változik
  useEffect(() => {//useEffect hívja meg a setUrl funkciót, amely frissíti az URL-t a megfelelő értékkel
    setUrl(mainUrl.imageOfTheDay + imageDay);
  }, [imageDay]);

  // Visszaadja az imageDayInfo állapotváltozót, vagy egy "Loading..." szöveget, ha az nincs még definiálva
  return imageDayInfo === undefined ? "Loading..." : imageDayInfo;
};


//egyedi React hook-ot definiál, amit useImageGallery néven
export const useImageGallery = () => {
  // A useFetch hook használata az adatok lekérésére imageGallery URL segítségével
  const [imageGalleryInfo, setUrl] = useFetch(mainUrl.imageGallery);

  // useEffect használata az URL frissítésére, a komponens első mount-olásakor
  useEffect(() => {
    setUrl(mainUrl.imageGallery);
  }, []);

  // Visszaadja az imageGalleryInfo állapotváltozót, vagy egy "Loading..." szöveget, ha az még nincs definiálva(tehát még tart a lekérdezés)
  return imageGalleryInfo === undefined ? "Loading..." : imageGalleryInfo;
};
