/* node module imports */
import React, {memo} from "react";

/* app imports */
import {ReactHTML5BackgroundVideo} from "@components/react-html5-bg-video/index.js";

const ScrollerItem = (props) => {
  const videoProps = {
    mp4: props.mp4,
    webm: props.webm
  }
  return (
    <React.Fragment>
      <div className="item positionRelative">
        <div className="posContainer">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <ul className="list-unstyled configList">
          {
            props.specs.map((entity, index) => {
              return (
                <li key={index}>
                  <span className="title">{entity.title}</span>
                  <span className="description">{entity.description}</span>
                </li>
              );
            })
          }
        </ul>
        <ReactHTML5BackgroundVideo {...videoProps}/>
      </div>
    </React.Fragment>
  );
};
export const MemoisedScrollerItem = memo(ScrollerItem);

