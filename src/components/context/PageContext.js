import React, { useState, createContext } from "react";

export const PageContext = createContext();

export function PageProvider(props) {
  const [page, setPage] = useState(0);
  return (
    <PageContext.Provider value={[page, setPage]}>
      {props.children}
    </PageContext.Provider>
  );
}
