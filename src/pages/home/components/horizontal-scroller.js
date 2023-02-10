/* node module imports */
import React, {useState, useEffect, useRef} from "react";

/* app imports */
import {useVideoSources} from "../hooks/use-video-src.js";
import {useOnHorizontalScroll} from "../hooks/use-on-horizontal-scroll.js";
import {HorizontalScrollParent} from "./horizontal-scroll-parent.js";
import {MemoisedScrollerItem} from "./scroller-item.js";

export const HorizontalScroller = () => {
  const {videoSources} = useVideoSources();
  const elementsWrapperRef = useRef();
  const horizontalParentRef = useRef();
  const {scrollHeightStyles, translateXStyles} = useOnHorizontalScroll({horizontalParentRef, elementsWrapperRef});

  /* set the props */
  const horizontalProps = {horizontalParentRef, elementsWrapperRef, scrollHeightStyles, translateXStyles};

  return (
    <HorizontalScrollParent {...horizontalProps}>
      {
        videoSources.length > 0 &&
        videoSources.map((data) => {
          return <MemoisedScrollerItem {...data}/>
        })
      }
    </HorizontalScrollParent>
  );
};
