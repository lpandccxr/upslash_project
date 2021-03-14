import { useState, useEffect, useContext } from "react";
import { PhotoContext } from "./context/PhotoContext";
import { PageContext } from "./context/PageContext";
import { KeywordContext } from "./context/KeywordContext";
import Axios from "axios";

export default function Searching() {
  // eslint-disable-next-line
  const [load, setLoad] = useState(true);
  const [more, setMore] = useState(false);
  // const [newPhoto, setNewPhoto] = useState([]);
  const [photo, setPhoto] = useContext(PhotoContext);
  const [page, setPage] = useContext(PageContext);
  const [keyWord, setKeyWord] = useContext(KeywordContext);

  const url =
    "https://api.unsplash.com/search/photos?page=" +
    page +
    "&per_page=24&query=" +
    keyWord +
    "&client_id=IWWNwZPPkgOp6WUzkA1hW4ejKlaDtfg-ras8c9Rr-44";

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        if (page === 1) {
          console.log(res.data.results);
          setPhoto(res.data.results);
        } else {
          let newPhoto = [...photo, ...res.data.results];
          setPhoto(newPhoto);
        }

        setMore(res.data.results.length > 0);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, keyWord]);

  return { load, more };
}
