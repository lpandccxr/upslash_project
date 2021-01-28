import React from "react";
//import { Card } from "react-bootstrap";
import "../style/Photo.css";

export default function Photo({ url, alt_dec, dec, upic, uurl, name }) {
  return (
    <div>
      <div className="photo">
        <img src={url} alt={alt_dec} className="photo__img" />
        <div className="photo__content">
          <p className="photo__alt">{alt_dec}</p>
          <a href={uurl} target="blank" title={name}>
            <img src={upic} className="photo__icon" alt={name} />
          </a>
        </div>
      </div>
    </div>
  );
}
