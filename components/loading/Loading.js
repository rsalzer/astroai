import React, { useState, useEffect } from 'react';

function LoadingComponent() {
  const phrases = [
    "Berechne Planetenkonstellationen",
    "Parse Sternenbewegungen",
    "Erwärme Siliziumkristalle",
    "Analysiere historische Daten",
    "Erstelle Vorhersagemodell",
    "Horoskop wird geladen"
  ];

  const delay = 2500; // Delay in milliseconds (2 seconds)

  const [loadingText, setLoadingText] = useState(phrases[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingText((prevText) => {
        const currentIndex = phrases.indexOf(prevText);
        const nextIndex = currentIndex + 1 === phrases.length ? 0 : currentIndex + 1;
        return phrases[nextIndex];
      });
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{loadingText}</div>;
}

export default LoadingComponent;
