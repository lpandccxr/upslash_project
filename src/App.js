import React from "react";

import { PhotoProvider } from "./components/context/PhotoContext";
import { PageProvider } from "./components/context/PageContext";
import { KeywordProvider } from "./components/context/KeywordContext";

import PhotoContainer from "./components/PhotoContainer";
import Header from "./components/Header";
import Information from "./components/Information";

import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Axios from "axios";

export default function App() {
  return (
    <PhotoProvider>
      <PageProvider>
        <KeywordProvider>
          <div className="App">
            <Header />
            <PhotoContainer />
            <Information />
          </div>
        </KeywordProvider>
      </PageProvider>
    </PhotoProvider>
  );
}
