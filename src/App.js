/* node modules import */
import React from "react";

/* app imports */
import "@components/common/css/common.scss";
import {AppNav} from "@components/app-nav/index.js";
import {HomePage} from "@pages/home/index.js";

export default function App() {
  return (
    <React.Fragment>
      <AppNav/>
      <HomePage/>
      <footer>
      </footer>
    </React.Fragment>
  );
}
