import React from "react";

const FontSize = ({ size, setSize }) => {
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <label htmlFor="range" className="form-label">
        <b>La taille de la police</b>
      </label>
      <input
        type="range"
        className="form-range"
        id="range"
        min="8"
        max="48"
        step="1"
        value={size}
        onChange={handleSizeChange}
      ></input>
    </>
  );
};

export default FontSize;
