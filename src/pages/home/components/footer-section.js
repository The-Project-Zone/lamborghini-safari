/* node module imports */
import React from "react";

/* app imports */
import {ReactHTML5BackgroundVideo} from "@components/react-html5-bg-video/index.js";

/* video imports */
import footerVideoMp4Source from "@appVideos/footer-video.mp4";
import footerVideoWebmSource from "@appVideos/footer-video.webm";

/* component */
export const FooterSection = () => {
  return (
    <div className="footerVideoSection positionRelative">
      <ReactHTML5BackgroundVideo mp4={footerVideoMp4Source} webm={footerVideoWebmSource}/>
      <div className="posContainer text-center">
        <h3>We Are Closer To The Moon</h3>
        <p>Stay Tuned. <br className="d-none d-sm-none"/>Watch This Space For More</p>
      </div>
    </div>
  );
};
