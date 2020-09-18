import { useState, useEffect } from "react";

const GoogleUseEffect = (font = "date") => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=${font}&key=${API_KEY}`;
    console.log(url);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Pas de google fonts");
      })
      .then((data) => {
        console.log(data.items.slice(0, 10));
        setFonts(data.items.slice(0, 10));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [font]);

  return { fonts };
};

export default GoogleUseEffect;
