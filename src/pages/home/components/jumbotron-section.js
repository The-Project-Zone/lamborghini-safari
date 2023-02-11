/* node module imports */
import React from "react";

/* app imports */
import {JumbotronSocialList} from "./social-icons-list.js";
import {HomeJumbotronBanner} from "./jumbotron-banner.js";
import {ReactHTML5BackgroundVideo} from "@components/react-html5-bg-video/index.js";

/* video imports */
import jumbotronVideoMp4Source from "@appVideos/jumbotron-video.mp4";
import jumbotronVideoWebmSource from "@appVideos/jumbotron-video.webm";

/* component */
export const JumbotronSection = () => {
  const videos = {mp4: jumbotronVideoMp4Source, webm: jumbotronVideoWebmSource}

  return (
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
  );
};
