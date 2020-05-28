import React from "react";
import social_data from "./social_data";
import { ReactComponent as RightCarret } from "./assets/right-carret.svg";

function Social() {
  const allSocial = social_data.map((data, index) => {
    const { link, name } = data; // data.link, data.name

    return (
      <li key={index}>
        <a href={link} target="_blank" className="george__link" rel="noopener noreferrer">
          {name}
          <span className="right-arrow">
            <RightCarret />
          </span>
        </a>{" "}
      </li>
    );
  });

  return <ul className="george__links">{allSocial}</ul>;
}

export default Social;
