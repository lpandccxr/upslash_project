import React from "react";
import "../style/Photo.css";

export default function Photo({ url, alt_dec, dec, upic, uurl, uname, id }) {
  return (
    <div>
      <div className="photo">
        <img src={url} alt={alt_dec} className="photo__img" key={id} />
        <div className="photo__content">
          <p className="photo__alt">{!dec ? alt_dec : dec}</p>
          <a href={uurl} target="blank" title={uname}>
            <img src={upic} className="photo__icon" alt={uname} />
          </a>
        </div>
      </div>
    </div>
  );
}
