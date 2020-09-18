import React from "react";

const Articles = (props) => {
  const { family, variants, category, text, size } = props;
  const UrlPlus = family.split(" ").join("+");

  return (
    <article className="col-lg-6 mb-3">
      <div className="card">
        <div className="card-body shadow p-3">
          <h2 className="h6 card-title d-flex align-items-center justify-content-between">
            <span>{family}</span> <small> {variants.length} variant(s)</small>
          </h2>
          <p className="card-subtitle ">
            <span className=" badge bg-dark text-light">
              {category.toUpperCase()}
            </span>
          </p>
          <p
            className="sample card-text pt-3"
            style={{ fontFamily: family, fontSize: `${size}px` }}
          >
            {text}
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="card-link text-danger"
            href={`https://fonts.google.com/specimen/${UrlPlus}`}
          >
            Voir sur Google Fonts (ouvre un nouveau tab)
          </a>
        </div>
      </div>
    </article>
  );
};

export default Articles;
