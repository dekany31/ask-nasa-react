import { useState, useEffect } from "react";


const useFetch = (initUrl) => {//Egy kezdeti URL-t (initUrl) vesz át paraméterként
  // Állapotváltozók definiálása a useState hook segítségével
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState(undefined);

  // useEffect függvény tartalmaz egy fetch kérést
  // useEffect hook használata adatainak lekérésekor, amikor a 'url' változik
  useEffect(() => {
    // A fetch API használata egy GET kérés végrehajtásához a megadott URL címre
    fetch(url)
      .then((response) => {
        if (response.status !== 200) return "There must be a problem";
        // Ha a válasz státusza 200, akkor parszoljuk a JSON tartalmat
        return response.json();
      })
      // Frissítjük a 'data' állapotváltozót a parszolt JSON-nal
      .then((json) => setData(json));
  }, [url]); // Az effektus újra fut, amikor a 'url' változik

  return [data, setUrl];
  // Visszaad egy tömböt, amely tartalmazza a lekért adatokat és egy függvényt a 'url' frissítéséhez

}
console.log(useFetch);

export default useFetch;

