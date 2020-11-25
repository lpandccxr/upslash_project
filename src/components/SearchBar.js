import React, { useState, useContext } from "react";
import { PhotoContext } from "./PhotoContext";
import Axios from "axios";
import "../style/SearchBar.css";
import { CgSearch } from "react-icons/cg";

//import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function SearchBar() {
  const [keyWord, setKeyWord] = useState("");

  // eslint-disable-next-line
  const [photo, setPhoto] = useContext(PhotoContext);

  const updateSearch = (e) => {
    const word = e.target.value;
    console.log(word);
    setKeyWord(word);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://api.unsplash.com/search/photos?page=1&per_page=24&query=" +
      keyWord +
      "&client_id=IWWNwZPPkgOp6WUzkA1hW4ejKlaDtfg-ras8c9Rr-44";

    console.log(url);

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
    <div className="searchBox">
      <form onSubmit={handleSubmit} className="searchForm">
        <CgSearch size={30} color={"rgb(87, 86, 86)"} />
        <input
          type="text"
          name="keyWord"
          value={keyWord}
          placeholder="Search Unsplash photo..."
          onChange={updateSearch}
          className="search"
        />
      </form>
    </div>
  );
}
