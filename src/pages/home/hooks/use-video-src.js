/* app imports */
import React, {useState} from "react";

/* video imports */
import lamboVideo1Mp4 from "@appVideos/lambo-video-1.mp4";
import lamboVideo1Webm from "@appVideos/lambo-video-1.webm";
import lamboVideo2Mp4 from "@appVideos/lambo-video-2.mp4";
import lamboVideo2Webm from "@appVideos/lambo-video-2.webm";
import lamboVideo3Mp4 from "@appVideos/lambo-video-3.mp4";
import lamboVideo3Webm from "@appVideos/lambo-video-3.webm";
import lamboVideo4Mp4 from "@appVideos/lambo-video-4.mp4";
import lamboVideo4Webm from "@appVideos/lambo-video-4.webm";

export const useVideoSources = () => {
  let [videoSources, setVideoSources] = useState(() => {
    return [
      {
        mp4: lamboVideo1Mp4,
        webm: lamboVideo1Webm,
        title: "Aventador LP 780-4 Ultimae",
        description: "It Takes Time To Become Timeless",
        specs: [
          {title: "Power(CV)/Power(KW)", description: "780 CV (574 kW) at 8,500 rpm"},
          {title: "Max Speed", description: "355 km/h"},
          {title: "0-100 km/h", description: "2.80 Seconds"},
        ]
      },
      {
        mp4: lamboVideo2Mp4,
        webm: lamboVideo2Webm,
        title: "Countach LPI 800-4",
        description: "Future Is Our Legacy",
        specs: [
          {title: "Power(CV)/Power(KW)", description: "814 CV / 599 kW"},
          {title: "Max Speed", description: "355 km/h"},
          {title: "0-100 km/h", description: "2.80 Seconds"},
        ]
      },
      {
        mp4: lamboVideo3Mp4,
        webm: lamboVideo3Webm,
        title: "Gallardo LP 560-4",
        description: "Evolution of Perfection",
        specs: [
          {title: "Power(CV)/Power(KW)", description: "552.5bhp @ 8000rpm"},
          {title: "Max Speed", description: "325 km/h"},
          {title: "0-100 km/h", description: "3.70 Seconds"},
        ]
      },
      {
        mp4: lamboVideo4Mp4,
        webm: lamboVideo4Webm,
        title: "Aventador J",
        description: "The Most Uncompromising Open Super Sports Car",
        specs: [
          {title: "Power(CV)/Power(KW)", description: "700 PS (515 kW) at 8,250 rpm"},
          {title: "Max Speed", description: "350 km/h"},
          {title: "0-100 km/h", description: "2.90 Seconds"},
        ]
      }
    ]
  });
  return {videoSources};
};
