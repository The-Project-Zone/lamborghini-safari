/* node module imports */
import React from "react";

/* app imports */
import jumbotronBgJpg from "@appImages/jumbotron.jpg";
import jumbotronBgWebp from "@appImages/jumbotron.webp";
import {useToCheckIfWebpSupported} from "@utils/react-browser-supports-webp/index.js";

export const HomeJumbotronBanner = () => {
  const {isWebpSupported} = useToCheckIfWebpSupported();

  if (isWebpSupported === null) {
    return <span className="backgroundBanner"></span>
  }
  else if (!isWebpSupported) {
    const bgStyles = {
      background: `url("${jumbotronBgJpg}") no-repeat center center`,
      backgroundSize: "cover"
    };
    return (<span style={bgStyles} className="backgroundBanner"></span>);
  }
  else {
    const bgStyles = {
      background: `url("${jumbotronBgWebp}") no-repeat center center`,
      backgroundSize: "cover"
    };
    return (<span style={bgStyles} className="backgroundBanner"></span>);
  }
};
