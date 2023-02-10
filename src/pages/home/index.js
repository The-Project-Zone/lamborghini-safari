/* node module imports */
import React, {useEffect, useState} from "react";

/* app imports */
import "./style.scss";
import {JumbotronSocialList} from "./components/social-icons-list.js";
import {HomeJumbotronBanner} from "./components/jumbotron-banner.js";
import {HorizontalScroller} from "./components/horizontal-scroller.js";
import {ReactHTML5BackgroundVideo} from "@components/react-html5-bg-video/index.js";

/* video imports */
import jumbotronVideoMp4Source from "@appVideos/jumbotron-video.mp4";
import jumbotronVideoWebmSource from "@appVideos/jumbotron-video.webm";
import footerVideoMp4Source from "@appVideos/footer-video.mp4";
import footerVideoWebmSource from "@appVideos/footer-video.webm";

export const HomePage = () => {
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
      <div className="footerVideoSection positionRelative">
        <ReactHTML5BackgroundVideo mp4={footerVideoMp4Source} webm={footerVideoWebmSource}/>
        <div className="posContainer text-center">
          <h3>We Are Closer To The Moon</h3>
          <p>Stay Tuned. <br className="d-none d-sm-none"/>Watch This Space For More</p>
        </div>
      </div>
    </React.Fragment>
  );
};
