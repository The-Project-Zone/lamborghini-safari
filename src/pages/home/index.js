/* node module imports */
import React from "react";

/* app imports */
import "./style.scss";
import {JumbotronSection} from "./components/jumbotron-section.js";
import {HorizontalScroller} from "./components/horizontal-scroller.js";
import {FooterSection} from "./components/footer-section.js";

export const HomePage = () => {
  return (
    <React.Fragment>
      <JumbotronSection/>
      <HorizontalScroller/>
      <FooterSection/>
    </React.Fragment>
  );
};
