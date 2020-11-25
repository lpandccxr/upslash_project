import React from "react";
import "../style/Header.css";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="header">
      <span className="header__icon"></span>
      <SearchBar />
    </div>
  );
}
