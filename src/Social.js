import React from "react";
import social_data from "./social_data";

function Social() {
  const allSocial = social_data.map((data) => {
    const { link, name } = data; // data.link, data.name
    return (
      <li>
        <a href={link} target="_blank" className="george__link">
          {name}
        </a>
      </li>
    );
  });

  return <ul className="george__links">{allSocial}</ul>;
}

export default Social;
