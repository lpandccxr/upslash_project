import React from "react";
// import SearchBar from "./components/SeachBar";
import PhotoContainer from "./components/PhotoContainer";
import { PhotoProvider } from "./components/PhotoContext";
import Header from "./components/Header";
import Information from "./components/Information";

import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Axios from "axios";

export default function App() {
  // const [bgPhoto, setBgPhoto] = useState("");

  // useEffect(() => {
  //   Axios.get(
  //     "https://api.unsplash.com/photos/random?client_id=IWWNwZPPkgOp6WUzkA1hW4ejKlaDtfg-ras8c9Rr-44"
  //   )
  //     .then((res) => {
  //       //console.log(res.data);
  //       setBgPhoto(res.data.urls.full);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <PhotoProvider>
      <div className="App">
        <Header />
        <PhotoContainer />
        <Information />
      </div>
    </PhotoProvider>
  );
}
