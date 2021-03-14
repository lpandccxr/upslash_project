import React, { useContext, useState } from "react";
import { PageContext } from "./context/PageContext";
import { KeywordContext } from "./context/KeywordContext";

import "../style/SearchBar.css";
import { CgSearch } from "react-icons/cg";

export default function SearchBar() {
  // eslint-disable-next-line
  const [search, setSearch] = useState("");
  const [page, setPage] = useContext(PageContext);
  const [keyWord, setKeyWord] = useContext(KeywordContext);

  const updateSearch = (e) => {
    const word = e.target.value;
    setSearch(word);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyWord(search);
    setPage(1);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit} className="searchForm">
        <CgSearch size={30} color={"rgb(87, 86, 86)"} />
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search Unsplash photo..."
          onChange={updateSearch}
          className="search"
        />
      </form>
    </div>
  );
}
