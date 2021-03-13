import React, { useContext, useState, useEffect } from "react";
import Searching from "./Searching";
import { PageContext } from "./context/PageContext";
import { KeywordContext } from "./context/KeywordContext";
import { PhotoContext } from "./context/PhotoContext";
import { LoadingContext } from "./context/LoadingContext";

import "../style/SearchBar.css";
import { CgSearch } from "react-icons/cg";

export default function SearchBar() {
  // eslint-disable-next-line
  const [page, setPage] = useContext(PageContext);
  const [keyWord, setKeyWord] = useContext(KeywordContext);
  const [photo, setPhoto] = useContext(PhotoContext);
  const [loading, setLoading] = useContext(LoadingContext);
  // const { photos, load, more } = Searching(page, keyWord);

  const updateSearch = (e) => {
    const word = e.target.value;
    setKeyWord(word);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    setPage(1);
    setLoading(!loading);
  };

  // useEffect(() => {
  //   let newPhoto = [...photo, ...photos];
  //   setPhoto(newPhoto);
  // }, [photos]);

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
