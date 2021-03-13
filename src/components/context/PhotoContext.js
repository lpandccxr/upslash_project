import React, { useState, createContext } from "react";

export const PhotoContext = createContext();

export function PhotoProvider(props) {
  const [photo, setPhoto] = useState([]);

  return (
    <PhotoContext.Provider value={[photo, setPhoto]}>
      {props.children}
    </PhotoContext.Provider>
  );
}

