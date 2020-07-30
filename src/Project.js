import React from "react";
import quenchLogo from "./assets/quenchlogo.png";

function Project() {
  return (
    <div className="project">
      <h3 className="project___header">Latest Project</h3>
      <div className="project__content">
        <div className="project_quench-logo-container">
          <img src={quenchLogo} alt="quench app logo" className="project__quench-logo" />
        </div>

        <div className="project__quench-info">
          <p className="project__title">Quench - Stay Hydrated</p>
          <p className="project__desc">Hydrate &amp; Log</p>
          <a
            href="https://apps.apple.com/ca/app/quench-stay-hydrated/id1493860273"
            role="button"
            className="project__button">
            Get
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

// div is like a divder, it has no styling, to contain stuff
// div is like <View> in react-native
