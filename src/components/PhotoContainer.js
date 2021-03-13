import React, { useContext, useRef, useCallback } from "react";
import { PhotoContext } from "./context/PhotoContext";
import { PageContext } from "./context/PageContext";
import { KeywordContext } from "./context/KeywordContext";
import Searching from "./Searching";
import Photo from "./Photo";
import "../style/PhotoContainer.css";

export default function PhotoContainer() {
  // eslint-disable-next-line
  const [photo, setPhotos] = useContext(PhotoContext);
  const [page, setPage] = useContext(PageContext);
  const [keyWord, setKeyWord] = useContext(KeywordContext);
  const { load, more } = Searching(page, keyWord);

  const observer = useRef();
  const lastPhotoElementRef = useCallback((node) => {
    if (load) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && more) {
        setPage((prePageNumber) => prePageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  });

  return (
    <div className="container">
      {photo.map((pic, index) => {
        if (photo.length === index + 1) {
          return (
            <div ref={lastPhotoElementRef}>
              <Photo
                reference={null}
                url={pic.urls.small}
                alt_dec={pic.alt_description}
                dec={pic.description}
                upic={pic.user.profile_image.medium}
                uurl={pic.user.links.html}
                uname={pic.user.username}
                key={pic.id}
              />
            </div>
          );
        } else {
          return (
            <Photo
              reference={null}
              url={pic.urls.small}
              alt_dec={pic.alt_description}
              dec={pic.description}
              upic={pic.user.profile_image.medium}
              uurl={pic.user.links.html}
              uname={pic.user.username}
              key={pic.id}
            />
          );
        }
      })}
    </div>
  );
}
