import React from "react";
import GoogleUseEffect from "./GoogleUseEffect";
import GoogleFontLoader from "react-google-font-loader";
import Articles from "./Articles";

const Fonts = (props) => {
  const { id, text, size, title, font = "date" } = props;
  const { fonts } = GoogleUseEffect(font);
  console.log(GoogleUseEffect);
  return (
    <>
      <section className="row mb-5 ">
        <GoogleFontLoader
          fonts={fonts.map((el) => ({
            font: el.family,
          }))}
        />
        <hr />
        <h2 id={id}>
          <span className=" badge bg-danger text-light mb-2">{title}</span>
        </h2>
        {fonts.map((font) => (
          <Articles key={font.family} text={text} size={size} {...font} />
        ))}
      </section>
    </>
  );
};

export default Fonts;
