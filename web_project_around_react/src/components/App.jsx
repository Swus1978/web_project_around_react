import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Popup from "./Popup/Popup";
import NewCard from "./form/NewCard/NewCard";

function App() {
  return (
    <div className="page">
      <Nav />
      <Header />
      <section className="card-section">
        <div className="card-section__grid"></div>
      </section>
      <Popup>
        <NewCard />
      </Popup>
      <Footer />
    </div>
  );
}

export default App;
