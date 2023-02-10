/* node module imports */
import React from "react";

/* app imports */
import {useVideoSources} from "../hooks/use-video-src.js";

export const HorizontalScrollParent = (props) => {
  const {
    horizontalParentRef, scrollHeightStyles, elementsWrapperRef, translateXStyles
  } = props;

  return (
    <div ref={horizontalParentRef} className="horizontalScrollParent" style={scrollHeightStyles}>
      <div className="stickyWrapper">
        <div ref={elementsWrapperRef} className="elementsWrapper" style={translateXStyles}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
