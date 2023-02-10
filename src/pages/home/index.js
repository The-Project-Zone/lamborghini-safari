/* node module imports */
import React, {useEffect, useState} from "react";

/* app imports */
import "./style.scss";
import {JumbotronSocialList} from "./components/social-icons-list.js";
import {HomeJumbotronBanner} from "./components/jumbotron-banner.js";
import {HorizontalScroller} from "./components/horizontal-scroller.js";
import {ReactHTML5BackgroundVideo} from "@components/react-html5-bg-video/index.js";

import jumbotronVideoMp4Source from "@appVideos/jumbotron-video.mp4";
import jumbotronVideoWebmSource from "@appVideos/jumbotron-video.webm";

export const HomePage = () => {
  let [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log("value set on timeout", value);
      setValue((prevState) => prevState + 1);
    }, 3000);
  }, [value]);

  const videos = {mp4: jumbotronVideoMp4Source, webm: jumbotronVideoWebmSource}

  return (
    <React.Fragment>
      <div className="jumbotronSection positionRelative">
        <div className="posContainer">
          <h1>The Lamborghini Safari</h1>
          <p>In the bedimmed darkness, light is shed onto something out of the ordinary, something
          that springs from our iconic legacy.</p>
        </div>
        <HomeJumbotronBanner/>
        <JumbotronSocialList/>
        <ReactHTML5BackgroundVideo {...videos}/>
      </div>
      <HorizontalScroller/>
    </React.Fragment>
  );
};
