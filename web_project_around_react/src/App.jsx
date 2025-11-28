import React, { useState } from "react";
import Popup from "../src/components/Main/Popup/Popup";
import NewCard from "../src/components/Main/Popup/forms/NewCard/NewCard";
import EditProfile from "../src/components/Main/Popup/forms/EditProfile/EditProfile";
import EditAvatar from "../src/components/Main/Popup/forms/EditAvatar/EditAvatar";

import { Nav } from "./components/Nav";
import Header from "./components/Header";
import CardRendering from "./components/CardRendering";
import Footer from "./components/Footer";

function App() {
  const [popup, setPopup] = useState(null);

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

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Actualizar avatar",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popupInfo) {
    setPopup(popupInfo);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <div className="page">
      <Nav />

      <main>
        <Header
          onEditProfile={() => handleOpenPopup(editProfilePopup)}
          onAddCard={() => handleOpenPopup(newCardPopup)}
          onEditAvatar={() => handleOpenPopup(editAvatarPopup)}
        />

        <CardRendering cards={cards} />

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}

        <div className="overlay" id="overlay"></div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
