import React, { useContext } from "react";
import { PageContext } from "./PageContext";
import { KeywordContext } from "./KeywordContext";
import { PhotoContext } from "./PhotoContext";
import Axios from "axios";
import "../style/button.css";

export default function PageButton() {
  const [photo, setPhoto] = useContext(PhotoContext);
  const [page, setPage] = useContext(PageContext);
  const [keyWord, setKeyWord] = useContext(KeywordContext);

  const handleNext = (e) => {
    e.preventDefault();

    let num = page + 1;
    console.log(num);
    setPage(num);
    //console.log(page);
    getPhoto(num);
  };

  const handlePre = (e) => {
    e.preventDefault();

    if (page > 1) {
      let num = page - 1;
      setPage(num);
      getPhoto(num);
    } else {
      setPage(1);
    }
  };

  const getPhoto = (num) => {
    const url =
      "https://api.unsplash.com/search/photos?page=" +
      num +
      "&per_page=24&query=" +
      keyWord +
      "&client_id=IWWNwZPPkgOp6WUzkA1hW4ejKlaDtfg-ras8c9Rr-44";

    //console.log(url);

    Axios.get(url)
      .then((res) => {
        console.log(res.data);
        setPhoto(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handlePre} className="button pre">
        Previous
      </button>
      <button onClick={handleNext} className="button next">
        Next
      </button>
    </div>
  );
}
