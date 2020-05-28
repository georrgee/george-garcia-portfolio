import React from "react";
import Social from "./Social";

function Info({ name, job, description }) {
  return (
    <div className="george__info">
      <h1 className="george__name">{name}</h1>
      <h2 className="george__job">{job}</h2>
      <Desc />
      <a href="mailto:garcia.george.b@gmail.com" role="button" className="george__contact">
        Contact
      </a>
      <div>
        <Social />
      </div>
    </div>
  );
}

function Desc() {
  return (
    <p className="george__copy">
      Currently at{" "}
      <a className="george__jobLink" href="https://www.gocopia.com/" rel="noopener noreferrer" target="_blank">
        Copia
      </a>{" "}
      trying to end world hunger
      <br />
      one line of code at a time
    </p>
  );
}

export default Info;
