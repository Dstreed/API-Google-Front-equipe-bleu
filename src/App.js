import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import FontSize from "./components/FontSize";
import Footer from "./components/Footer";
import Fonts from "./components/Fonts";

function App() {
  const [size, setSize] = useState(28);
  const [text, setText] = useState(
    "Portez ce vieux whisky au juge blond qui fume !? 0123456789"
  );

  return (
    <>
      <Header />
      <main className="container min-vh-100">
        <div className="row my-5">
          <div className="col-lg-3">
            <div style={{ position: "sticky", top: 0 }}>
              <TextForm text={text} setText={setText} />
              <FontSize size={size} setSize={setSize} />
            </div>
          </div>
          <div className="col-lg-9">
            <Fonts
              size={size}
              text={text}
              font="date"
              title="Les plus récentes"
            />
            <Fonts
              size={size}
              text={text}
              font="trending"
              title="Trending Fonts"
            />
            <Fonts
              size={size}
              text={text}
              font="popularity"
              title="Les plus populaires"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
