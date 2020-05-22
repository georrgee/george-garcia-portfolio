import React from "react";
import george_iphone from "./assets/GeorgeiPhone-500.png";
import dev from "./dev";
import Info from "./Info";
import "./App.scss";

function App() {
  const { name, job, description } = dev;

  return (
    <div className="george">
      <div className="col-50">
        <Info name={name} job={job} description={description} />
      </div>

      <div className="col-50">
        {/* <img src={george_iphone} className="george__iphoneImage" alt="A picture of me in a mockup" /> */}
        <img src={george_iphone} className="george__iphoneImage" alt="Selfie in a mockup" />
      </div>
    </div>
  );
}

export default App;
