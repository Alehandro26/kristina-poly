import { Outlet } from "react-router-dom";
import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
        <aside className="call">
          <a className="call__link" href="tel:+79282300555">
            Звонок
          </a>
        </aside>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
