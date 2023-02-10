/* node module imports */
import React from "react";

/* app imports */
import "./style.scss";
import appIconSource from "@appIcons/app-logo.svg";
import langIconSource from "@appIcons/lang-icon.svg";

export const AppNav = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="customRow">
          <img src={appIconSource} className="img-fluid appIcon"
          alt="Lamborghini Safari | Do You Want One?"
          title="Lamborghini Safari | Do You Want One?"/>
          <img src={langIconSource} className="img-fluid langIcon"
          alt="Language | English" title="Language | English"/>
        </div>
      </nav>
    </React.Fragment>
  );
};
