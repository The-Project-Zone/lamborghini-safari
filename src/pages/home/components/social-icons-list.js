/* node module imports */
import React, {useState, useEffect} from "react";

/* icon imports */
import twitterIconSrc from "@appIcons/j-twitter-icon.svg";
import facebookIconSrc from "@appIcons/j-facebook-icon.svg";
import youtubeIconSrc from "@appIcons/j-youtube-icon.svg";
import instagramIconSrc from "@appIcons/j-instagram-icon.svg";

export const JumbotronSocialList = () => {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeout = null;

    function debounceUpdateWindowWidth() {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setWindowWidth(() => window.innerWidth);
      }, 200);
    }

    window.addEventListener("resize", debounceUpdateWindowWidth);
    return () => {
      window.removeEventListener("resize", debounceUpdateWindowWidth);
    };
  }, []);

  if (windowWidth < 1200) {
    return null;
  }
  else {
    return (
      <ul className="list-unstyled socialList">
        <li>
          <img src={twitterIconSrc} className="img-fluid"
          alt="Lamborghini | Twitter" title="Lamborghini | Twitter"/>
        </li>
        <li>
          <img src={facebookIconSrc} className="img-fluid"
          alt="Lamborghini | Facebook" title="Lamborghini | Facebook"/>
        </li>
        <li>
          <img src={youtubeIconSrc} className="img-fluid"
          alt="Lamborghini | YouTube" title="Lamborghini | YouTube"/>
        </li>
        <li>
          <img src={instagramIconSrc} className="img-fluid"
          alt="Lamborghini | Instagram" title="Lamborghini | Instagram"/>
        </li>
      </ul>
    );
  }
};
