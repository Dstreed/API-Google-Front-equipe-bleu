import React from "react";
import "./App.css";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import FontSize from "./components/FontSize";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Fonts from "./components/Fonts";

function App() {
  return (
    <>
      <Header />
      <main className="container min-vh-100">
        <div className="row my-5">
          <div className="col-lg-3">
            <div style={{ position: "sticky", top: 0 }}>
              <TextForm />
              <FontSize />
            </div>
          </div>
          <div className="col-lg-9">
            <Fonts />
            <Articles />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
