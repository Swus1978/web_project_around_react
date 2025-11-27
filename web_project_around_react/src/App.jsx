import React from "react";
import "./pages/index.css";
import { Nav } from "./components/Nav";
import Header from "./components/Header";
import CardRendering from "./components/CardRendering";

function App() {
  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  return (
    <div className="page">
      <Nav />
      <main>
        <Header />

        <CardRendering cards={cards} />

        <div className="overlay" id="overlay"></div>
      </main>
    </div>
  );
}

export default App;
