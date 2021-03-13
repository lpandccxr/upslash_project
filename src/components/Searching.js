import { useState, useEffect, useContext } from "react";
import { PhotoContext } from "./context/PhotoContext";
import { LoadingContext } from "./context/LoadingContext";
import Axios from "axios";

export default function Searching(page, keyWord) {
  // eslint-disable-next-line
  const [load, setLoad] = useState(true);
  const [more, setMore] = useState(false);
  // const [newPhoto, setNewPhoto] = useState([]);
  const [photo, setPhoto] = useContext(PhotoContext);
  const [loading, setLoading] = useContext(LoadingContext);

  const url =
    "https://api.unsplash.com/search/photos?page=" +
    page +
    "&per_page=24&query=" +
    keyWord +
    "&client_id=IWWNwZPPkgOp6WUzkA1hW4ejKlaDtfg-ras8c9Rr-44";

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        if (page == 1) {
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
  }, [page, loading]);

  return { load, more };
}
