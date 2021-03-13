import React, { useState, createContext } from "react";

export const KeywordContext = createContext();

export function KeywordProvider(props) {
  const [keyWord, setKeyWord] = useState("");

  return (
    <KeywordContext.Provider value={[keyWord, setKeyWord]}>
      {props.children}
    </KeywordContext.Provider>
  );
}
