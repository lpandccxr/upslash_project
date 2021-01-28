import React, { useContext } from "react";
import { PhotoContext } from "./PhotoContext";
import Photo from "./Photo";
//import { CardDeck } from "react-bootstrap";
import "../style/PhotoContainer.css";

export default function PhotoContainer() {
  // eslint-disable-next-line
  const [photos, setPhotos] = useContext(PhotoContext);
 // console.log(photos);

  return (
    <div className="container">
      {photos.map((pic) => (
        <Photo
          url={pic.urls.small}
          alt_dec={pic.alt_description}
          dec={pic.description}
          upic={pic.user.profile_image.medium}
          uurl={pic.user.links.html}
          uname={pic.user.username}
          key={pic.id}
        />
      ))}
    </div>
  );
}
