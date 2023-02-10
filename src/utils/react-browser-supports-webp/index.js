/* node module imports */
import React, {useEffect, useState} from "react";

export const useToCheckIfWebpSupported = () => {
  let [isWebpSupported, setIsWebpSupported] = useState(null);

  function checkSupport() {
    return new Promise((resolve, reject) => {
      const webP = new Image();
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
    });
  }

  useEffect(() => {
    (async () => {
      const supportStatus = await checkSupport();
      setIsWebpSupported(() => supportStatus);
    })();
  }, []);

  return {isWebpSupported}
};
