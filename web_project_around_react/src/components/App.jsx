import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="page">
      <Nav />
      <Header />
      <section class="card-section">
        <div class="card-section__grid"></div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
